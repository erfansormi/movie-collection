import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

//context
import { StateContext } from "../../Context/StateContextProvider";

//componets
import AddToBookmark from "../Buttons/AddToBookmark";

//css
import styles from "./navbar.module.css";

const ShowBookmark = ({ show, closeHandler }) => {
    const { state } = useContext(StateContext);

    return (
        <>
            <Offcanvas placement="end" show={show} onHide={closeHandler}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="text-light">Bookmark</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    {JSON.parse(window.localStorage.getItem("bookmarks")) &&
                        JSON.parse(window.localStorage.getItem("bookmarks")).map((item) => (
                            <section
                                key={item.id}
                                className={`d-flex p-3 text-light ${styles.bookmark_box}`}
                                style={{
                                    borderBottom: "1px solid",
                                    backgroundColor: "var(--bs-gray-700)",
                                }}
                            >
                                <Link
                                    className="w-100 d-flex text-light"
                                    to={`/show-movies/${item.name.replaceAll(" ", "")}-id=${item.id
                                        }`}
                                >
                                    <div className="me-4">
                                        <img
                                            style={{ width: "70px", height: "auto", borderRadius: 6 }}
                                            src={item.image.medium}
                                            alt="movie poaster"
                                        />
                                    </div>
                                    <div
                                        style={{ width: 220 }}
                                        className="d-flex flex-column justify-content-between py-2 fw-bold"
                                    >
                                        <div>
                                            <h4 style={{ fontSize: 17 }} className="m-0">
                                                {item.name}
                                            </h4>
                                        </div>
                                        <div>
                                            <span className="me-3">
                                                {item.premiered.split("-")[0]}
                                            </span>
                                            <span>{item.runtime}min</span>
                                        </div>
                                    </div>
                                </Link>
                                <div style={{ width: 120, marginTop: 6 }}>
                                    <div
                                        className="d-flex justify-content-end"
                                        style={{ zIndex: 100 }}
                                    >
                                        <AddToBookmark fontSize={22} details={item} />
                                    </div>
                                </div>
                            </section>
                        ))}
                    {!JSON.parse(window.localStorage.getItem("bookmarks")) && (
                        <div className="text-capitalize d-flex justify-content-center mt-3 fw-bold text-secondary">
                            bookmark is empty!
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default ShowBookmark;
