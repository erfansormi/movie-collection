import React from 'react'
import { Link } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const Slide = ({ image, id }) => {

    return (
        <Link to={id}>
            <LazyLoadImage effect="opacity" className='img-fluid '
                style={{ borderRadius: "6px", minWidth: 120, minHeight: 220 }}
                src={image} alt="movie poaster" />
        </Link>
    )
}

export default Slide