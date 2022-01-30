import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="NavbarContainer">
            <div className="NavbarLeft">
                <Link to="/" className="linkLogo">
                    <span className="logo">Morph</span>
                </Link>
            </div>
            <div className="NavbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friends, post or video" className="searchInput" />
                </div>
            </div>
            <div className="NavbarRigth">
                <div className="navbarLinks">
                    <span className="navbarLink">Homepage</span>
                    <span className="navbarLink">Timeline</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <Person />
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Chat />
                        <span className="navbarIconBadge">6</span>
                    </div>
                    <div className="navbarIconItem">
                        <Notifications />
                        <span className="navbarIconBadge">3</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img
                        src={
                            user.profilePicture
                                ? PF + user.profilePicture
                                : PF + "person/noAvatar.png"
                        }
                        alt=""
                        className="NavbarImg"
                    />
                </Link>
            </div>
        </div>

    )
};

export default Navbar;
