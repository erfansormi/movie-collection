import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { Button, Offcanvas, Form, FormControl } from "react-bootstrap"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


//context
import { StateContext } from '../../Context/StateContextProvider'

//components
import SearchBoxMovies from './SearchBoxMovies'
import SearchboxLoading from '../Loading/SearchboxLoading'
import AccountMenu from './AccountMenu'

//css
import styles from "./navbar.module.css"

const NavbarSm = ({ setInputValue, inputValue, changeHandler, search }) => {
    //context
    const { state } = useContext(StateContext)

    //state 
    const [show, setShow] = useState(false);
    const [isFocused, setIsFocused] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={`d-block d-lg-none`}>
            <nav className="d-flex justify-content-between">
                <IconButton color='default' onClick={handleShow}>
                    <MenuIcon />
                </IconButton>
                <div className="position-relative">
                    <Form className="d-flex">
                        <FormControl
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            value={inputValue}
                            onChange={changeHandler}
                            type="search"
                            placeholder="Search Movie"
                            className="me-2"
                            style={{ backgroundColor: "rgba(255 , 255,255 , .15)", color: "#fff", width: "100%" }}
                            aria-label="Search"
                        />
                    </Form>

                    {/* search-box */}
                    {inputValue && state.data.length &&
                        <div className={styles.movie_searched_container}>
                            {search.map((item, index) =>
                                <SearchBoxMovies
                                    id={`/show-movies/${item.name.replaceAll(" ", "")}-id=${item.id}`}
                                    premiered={item.premiered}
                                    image={item.image.medium}
                                    name={item.name}
                                    key={index} />
                            )}
                        </div>
                    }

                    {/* loading */}
                    {!state.data.length && isFocused &&
                        <SearchboxLoading />
                    }
                </div>
                <AccountMenu />
            </nav>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton style={{ borderBottom: "1px solid #fff" }}>
                    <Offcanvas.Title className="d-flex align-items-center">
                        <h3 className='m-0 me-5'>
                            <Link className={`text-light text-capitalize`} to="/">
                                movie collection
                            </Link>
                        </h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="m-0 p-0">
                        <Link className={`nav-link ${styles.nav_link}`} to="/show-movies" >free movies & tv</Link>
                        <Link className={`nav-link ${styles.nav_link}`} to="/" >features</Link>
                        <Link className={`nav-link ${styles.nav_link}`} to="/" >download</Link>
                        <Link className={`nav-link ${styles.nav_link}`} to="/" >news</Link>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default NavbarSm