import React, { useEffect, createContext, useState, useReducer } from "react";
import axios from "axios";

//functions
import { bestsRatingFilter } from "../functions/moviesFilter";
import { recentlyAdded } from "../functions/moviesFilter";
import { topAnimations } from "../functions/moviesFilter";
import { topActions } from "../functions/moviesFilter";
import { topComedy } from "../functions/moviesFilter";
import { setLocalStorage } from "../functions/LocalStorage";

//context
export const StateContext = createContext();

// reducer
const initialValue = {
    data:
        JSON.parse(window.localStorage.getItem("movie-collection-data"))
            ? JSON.parse(window.localStorage.getItem("movie-collection-data"))
            : [],
    bookmark: [],
    accountMenu: {
        setting: false,
        showBookmark: false,
        logout: false,
    },
    filters: {
        bestsRating: [],
        recentlyAdded: [],
        topAnimations: [],
        topActions: [],
        topComedy: [],
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case "IMPORT_DATA":
            state.data = action.payload;

            //bookmarks
            state.bookmark = JSON.parse(window.localStorage.getItem("bookmarks"))
                ? JSON.parse(window.localStorage.getItem("bookmarks"))
                : [];

            //best-rating
            state.filters.bestsRating = bestsRatingFilter(state);

            //recently-added
            state.filters.recentlyAdded = recentlyAdded(state);

            //top-animations
            state.filters.topAnimations = topAnimations(state);

            //top-actions
            state.filters.topActions = topActions(state);

            //top-comedy
            state.filters.topComedy = topComedy(state);

            return {
                ...state,
            };

        case "ADD_TO_BOOKMARK":
            if (!state.bookmark.find((item) => item.id == action.payload.id)) {
                state.bookmark.push(action.payload);
                setLocalStorage("bookmarks", JSON.stringify(state.bookmark));
            }

            return {
                ...state,
            };

        case "REMOVE_TO_BOOKMARK":
            const newBookmark = state.bookmark.filter(
                (item) => item.id != action.payload.id && item
            );
            state.bookmark = newBookmark;
            setLocalStorage("bookmarks", JSON.stringify(newBookmark));

            return {
                ...state,
            };
    }
};

const StateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    useEffect(() => {
        const BaseURL = "https://api.tvmaze.com/shows";

        axios.get(BaseURL).then((response) => {
            dispatch({ type: "IMPORT_DATA", payload: response.data });
            setLocalStorage("movie-collection-data", JSON.stringify(response.data));
        });
    }, []);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export default StateContextProvider;
