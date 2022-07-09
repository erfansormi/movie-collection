import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

//components
import SwiperComponent from '../Slide/SwiperComponent'

//context
import { StateContext } from '../../Context/StateContextProvider';

const ShowExplore = () => {
    const { state } = useContext(StateContext);

    return (
        <div className={`mt-5 py-5 text-light`} style={{ background: "#555" }}>
            <div className={`container`}>
                <div className={`d-flex flex-column align-items-center`}>
                    <div className={`mb-4`}>
                        <h3>What we’re watching now.</h3>
                    </div>
                    <div className="mt-3">
                        <p>But keep in mind, we’ve got over 50,000 more free on-demand titles waiting for you.</p>
                    </div>
                </div>
                <div>
                    <SwiperComponent data={state.filters.bestsRating} />

                    <div className='d-flex justify-content-center'>
                        <Link to={"/show-movies"}
                            className='btn-yellow text-capitalize rounded-4'>
                            explore movies & shows
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowExplore