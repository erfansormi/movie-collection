import React, { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip';

//context
import { StateContext } from '../../Context/StateContextProvider'

//functions
import { isInBookmark } from '../../functions/moviesFilter';

const AddToBookmark = ({ details, fontSize }) => {
    //data-context
    const { state, dispatch } = useContext(StateContext)

    return (
        <>
            {isInBookmark(state.bookmark, details) ?
                <Tooltip title="remove to bookmark?">
                    <button onClick={() => dispatch({ type: "REMOVE_TO_BOOKMARK", payload: details })}
                        className="btn-light btn-white" style={{ zIndex: 100, padding: "1px 8px", transition: "var(--transition)" }}>
                        <i className="bi bi-bookmark-fill" style={{ fontSize: fontSize }}></i>
                    </button>
                </Tooltip> :
                <Tooltip title="add to bookmark?">
                    <button onClick={() => dispatch({ type: "ADD_TO_BOOKMARK", payload: details })}
                        className="btn-white btn-light" style={{ zIndex: 100, padding: "1px 8px", transition: "var(--transition)" }}>
                        <i className="bi bi-bookmark" style={{ fontSize: fontSize }}></i>
                    </button>
                </Tooltip>}
        </>
    )
}

export default AddToBookmark