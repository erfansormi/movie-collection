import React from 'react'

//componets
import Navbar from '../Navbar/Navbar'
import ShowSliders from './ShowSliders'

//css
import styles from "./homeShowMovies.module.css"

const HomeShowMovies = () => {
    return (
        <>
            <div className={styles.container}>
                    <Navbar />
                <div className={`${styles.banner_container}`}>
                    <div className={`${styles.left_side_bg} col-4`}>
                    </div>
                    <div className={`${styles.bg_container} col-8`}></div>
                    <div className={`ps-md-4 ps-2 ${styles.banner_title}`}>
                        <h1 className='fs-2'>free movie & tv shows in movili</h1>
                    </div>
                </div>
            </div>
            <ShowSliders />
        </>
    )
}

export default HomeShowMovies