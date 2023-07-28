import React from "react";
// import { } from ''


let Navbar = () => {
    return (
        <>

            <nav className="navbar">
                <div className="navbar__logo">

                    {/* <img src="youtube_logo.png" alt="YouTube Logo" /> */}
                    <span className="navbar__title">YouTube</span>
                </div>
                <div className="navbar__search">
                    <input type="text" placeholder="Search" />
                    {/* <button className="navbar__search-button">Search</button> */}
                </div>
                <div className="navbar__actions">
                    <button className="navbar__upload-button">Upload</button>
                    {/* <img src="profile_picture.png" alt="Profile Picture" /> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;