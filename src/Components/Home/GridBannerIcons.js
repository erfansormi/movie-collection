import React from 'react'

const grid = [
    {
        icon: <i className="bi bi-coin"></i>,
        title: "Always Free",
        color: "#a55eea",
        descriptions: "Finally, a free movie website that’s actually free. Watch any time, no subscription required."
    },
    {
        icon: <i className="bi bi-collection-play"></i>,
        title: "Tons to Watch",
        color: "#45aaf2",
        descriptions: "Choose from over 50,000 free on-demand titles plus over 250 channels of instant Live TV."
    },
    {
        icon: <i className="bi bi-pc-display-horizontal"></i>,
        title: "Device-Friendly",
        color: "#f7b731",
        descriptions: "Stream the good stuff from your favorite devices including Apple, Android, Smart TVs, and more."
    },
    {
        icon: <i className="bi bi-globe2"></i>,
        title: "Works Worldwide",
        color: "#26de81",
        descriptions: "Enjoy access to more content from more countries worldwide than any other service."
    },
]

const GridBannerIcons = () => {
    return (
        <div className={`container my-5`}>
            <div className={`row`}>
                {grid.map((item, index) =>
                    <div key={index} className={`col-12 col-sm-6 col-md-3 d-flex flex-column`}>
                        <div className={`display-5`} style={{ color: item.color }}>
                            {item.icon}
                        </div>
                        <h4 className={`mb-3 mt-2 fs-5`}>{item.title}</h4>
                        <p>{item.descriptions}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GridBannerIcons