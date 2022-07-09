import React, { useState, useContext, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Nav, Navbar, Container, Form, FormControl } from "react-bootstrap"

//context
import { StateContext } from '../../Context/StateContextProvider'

//components
import SearchBoxMovies from './SearchBoxMovies'
import SearchboxLoading from '../Loading/SearchboxLoading'
import AccountMenu from './AccountMenu'
import NavbarSm from './NavbarSm'

//css
import styles from "./navbar.module.css"

const NavBar = () => {
    //context
    const { state } = useContext(StateContext)

    //states
    const [inputValue, setInputValue] = useState("")
    const [isFocused, setIsFocused] = useState(false)

    // search-movie-filter
    const search = state.data.filter((item) => item.name.toLowerCase().includes(inputValue.toLocaleLowerCase()))

    //functions
    const changeHandler = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <header className={`${styles.header}`}>
            <Navbar className={`d-none d-lg-block ${styles.navbar}`} variant="dark" expand="lg">
                <Container fluid>
                    <Link className={`me-3 ${styles.nav_brand}`} to="/">
                        movie collection
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className={`justify-content-between`}>
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
                                    style={{ backgroundColor: "rgba(255 , 255,255 , .15)", color: "#fff", minWidth: 290, width: "100%", maxWidth: 320, }}
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
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className={`nav-link ${styles.nav_link}`} to="/show-movies" >free movies & tv</Link>
                            <Link className={`nav-link ${styles.nav_link}`} to="/" >features</Link>
                            <Link className={`nav-link ${styles.nav_link}`} to="/" >download</Link>
                            <Link className={`nav-link ${styles.nav_link}`} to="/" >news</Link>
                            <AccountMenu />
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >

            {/* Navbar-sm */}
            <NavbarSm inputValue={inputValue} setInputValue={setInputValue} changeHandler={changeHandler} search={search} />
        </header>
    )
}

export default NavBar