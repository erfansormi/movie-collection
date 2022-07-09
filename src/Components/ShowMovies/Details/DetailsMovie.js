import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';

//components
import Navbar from "../../Navbar/Navbar"
import AddToBookmark from '../../Buttons/AddToBookmark';

//context
import { StateContext } from '../../../Context/StateContextProvider'


//css
import styles from "./detailsMovie.module.css"

const DetailsMovie = () => {
    //data-context
    const { state } = useContext(StateContext)

    //movie-detail-id 
    const detailsID = useParams()

    const details = state.data.find(item => `${item.name.replaceAll(" ", "")}-id=${item.id}` == detailsID.id && item)

    const { name, summary, url, premiered, language, genres, averageRuntime, network: { country }, image: { medium }, rating: { average } } = details;

    return (
        // <div className={`${styles.container}`} style={{ backgroundImage: `url(${details.image.medium})`, backgroundPosition: "center", backgroundSize: "cover" }} >
        <div className={`${styles.container}`} >
            <Navbar />
            <div className={`${styles.details_container} container-fluid`}>
                <div className={`row  `}>
                    <div className={`col-xxl-3 col-lg-4 col-md-5 col-sm-5 col-12 justify-content-center justify-content-md-end  me-md-5 ${styles.img_container}`}>
                        <div>
                            <img src={medium} alt="movie poaster" />
                        </div>
                    </div>
                    <div className={`col-md-6 col-sm-6 col-11 mt-3 mt-sm-0 justify-content-center ${styles.movie_details_container}`}>
                        <div>
                            <div>
                                <h2 className="fw-bold fs-3">{name}</h2>
                            </div>
                            <div className="">
                                <span>{premiered.split("-")[0]}</span>
                                <span className={`ms-3`}>{averageRuntime} min</span>
                            </div>
                            <div className={styles.rate_container}>
                                <Tooltip title={`IMDb rating ${average}`}>
                                    <div>
                                        <img src="https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png" alt="IMDb logo" />
                                        <span className="fw-bold">{average}</span>
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                        <div style={{ margin: "32px 0" }}>
                            <div className="d-flex">
                                <div className="me-4">
                                    <a target={"_blank"} href={url} className='btn-yellow d-block'>
                                        whatch now
                                    </a>
                                </div>
                                <div className="me-4">
                                    <button className='btn-white'>
                                        share
                                    </button>
                                </div>
                                <div>
                                    <AddToBookmark fontSize={25} details={details} />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.description_container}`}>
                            <p>
                                {summary.replace(/<p>/ig, "").replace(/<b>/ig, "").replace(/<\Wp>/ig, "").replace(/<\Wb>/ig, "").replace(/<i>/ig, "").replace(/<\Wi>/ig, "")}
                            </p>
                        </div>
                        <div className={styles.other_details_container}>
                            <div className={styles.genres_container}>
                                <h6>genre</h6>
                                {genres.map((i, index) => <span key={index}>{i}</span>)}
                            </div>
                            <div>
                                <h6>language</h6>
                                <span>{language}</span>
                            </div>
                            <div>
                                <h6>country</h6>
                                <span>{country.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailsMovie