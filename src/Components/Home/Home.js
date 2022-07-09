import React, { useContext } from 'react'

//context
import { StateContext } from '../../Context/StateContextProvider'

//components
import Navbar from '../Navbar/Navbar'
import HomeBanner from './HomeBanner'
import GridBannerIcons from './GridBannerIcons'
import ShowExplore from './ShowExplore'

//css
import styles from "./home.module.css"

const Home = () => {
    //data-context
    const { state } = useContext(StateContext)

    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <HomeBanner />
            </div>
            <GridBannerIcons />
            <ShowExplore />
        </>
    )
}

export default Home