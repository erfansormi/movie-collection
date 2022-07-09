//movies-filters
export const bestsRatingFilter = (state) => {
    const bestsRating = state.data.filter(
        (item) => item.rating.average > 8.5 && item
    );
    return bestsRating;
};

export const recentlyAdded = (state) => {
    const years = state.data.filter(
        (item) =>
            item.premiered.split("-")[0] == 2014 &&
            item.premiered.split("-")[1] == 10 &&
            item
    );
    return years;
};

export const topAnimations = (state) => {
    const tops = state.data.filter(
        (item) =>
            item.type.toLowerCase() == "animation" && item.rating.average > 7 && item
    );
    return tops;
};

export const topActions = (state) => {
    const tops = state.data.filter((item) =>
        item.genres.find(
            (i) =>
                i.toLowerCase().includes("action") && item.rating.average > 8 && item
        )
    );
    return tops;
};

export const topComedy = (state) => {
    const tops = state.data.filter((item) =>
        item.genres.find(
            (i) =>
                i.toLowerCase().includes("comedy") && item.rating.average > 8 && item
        )
    );
    return tops;
};

//bookmark
export const isInBookmark = (bookmark, payload) => {
    if (bookmark.find((item) => item.id == payload.id)) {
        return true;
    } else {
        return false;
    }
};


