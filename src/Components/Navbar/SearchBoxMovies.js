import React from 'react'
import { Link } from "react-router-dom"

//css
import styles from "./navbar.module.css"

const SearchBoxMovies = ({ id, name, image, premiered }) => {
    const splitedDate = premiered.split("-")
    return (
        // <section>
        <Link to={id}>
            <section>
                <div className={styles.img_box}>
                    <img src={image} alt="movie poaster" />
                </div>
                <div className={styles.title_box}>
                    <h6>
                        {name}
                    </h6>
                    <div>
                        <span>{splitedDate[0]}</span>
                    </div>
                </div>
            </section>
        </Link>
        // </section>
    )
}

export default SearchBoxMovies