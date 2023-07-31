import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Search from './Search'



let Navbar = () => {
    return (
        <>

            <nav className="navbar">
                <div className="navbar__logo">
                    <FontAwesomeIcon className="logo-icon" icon={faYoutube} />
                    <p>YouTube</p>
                </div>
                <div className="input-search">
                    {/* <input  type="text" placeholder="Search" /> */}
                    <Search></Search>
                    <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />

                </div>
                <ul className="navbar__links">
                    <li><a href="/"><FontAwesomeIcon className="plus-icon" icon={faPlus} /></a></li>

                    <li><a href="/about"><FontAwesomeIcon className="plus-icon" icon={faBell} /></a></li>

                    <li><a href="/">
                        <img className="profile-icon" src="https://yt3.ggpht.com/O9fEqRad_5365g-Ewh3bazGP4rmHwCjj2awtlNfaoS1kuGzWrTjzUNTkPAKAc0p5G9dyuYu0nSA=s88-c-k-c0x00ffffff-no-rj" alt="profiles" />
                    </a></li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar;