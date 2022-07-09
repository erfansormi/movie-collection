import React from 'react'

//css
import styles from "./loading.module.css"

const SearchboxLoading = () => {
    return (
        <div className={styles.movie_searched_container}>
            <div className={`spinner-border ${styles.spinner_box}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default SearchboxLoading