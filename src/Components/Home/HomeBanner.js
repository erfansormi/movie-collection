import React from 'react'

//css
import styles from "./home.module.css"

const HomeBanner = () => {
    return (
        <div className={`${styles.banner_bg}`}>
            <section className={`${styles.banner_content}`}>
                <h1>
                    <div>Bye,Bye</div>
                    <div>Streaming</div>
                    <div>Struggle</div>
                </h1>
            </section>
            <section className={`${styles.banner_section_2}`}>
                <div>
                    Watch anytime, anywhere with the Plex app.
                </div>
                <div>
                    <img src="https://www.plex.tv/wp-content/uploads/2021/02/platform-logos-2x-1440x60.png" alt="banner" />
                </div>
            </section>
        </div>
    )
}

export default HomeBanner