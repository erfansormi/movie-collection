import React, { useContext } from 'react'

//context
import { StateContext } from '../../Context/StateContextProvider'

//components
import SwiperComponent from "../Slide/SwiperComponent"

//css
import styles from "./showSliders.module.css"


const ShowSliders = () => {
    const { state } = useContext(StateContext)

    return (
        <div className={styles.contianer}>
            {/* best rating */}
            <SwiperComponent data={state.filters.bestsRating} title="best rating" />

            {/* recently added */}
            <SwiperComponent data={state.filters.recentlyAdded} title="recently added" />

            {/* top-animations */}
            <SwiperComponent data={state.filters.topAnimations} title="top animations" />

            {/* top-actions */}
            <SwiperComponent data={state.filters.topActions} title="top actions" />

            {/* top-comedy */}
            <SwiperComponent data={state.filters.topComedy} title="top comedy" />

        </div>
    )
}

export default ShowSliders