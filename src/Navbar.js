import React from 'react';
import { FaSearch } from 'react-icons/fa';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="header-container">
            <img alt="home-image" src="https://yt3.googleusercontent.com/fYQ9oISFo43ASeOcYWK2D7B1evgMTgQwzWNglVwiI7GlbRE0v9XfbxbuOicl7iJ8gsiTPuFX9g=s160-c-k-c0x00ffffff-no-rj" width={50} />
            <div className='header'>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <FaSearch className="search-icon" />
                </div>
                <div className="user-settings">
                    <EmailRoundedIcon />
                    <SettingsRoundedIcon />
                    <NotificationsRoundedIcon />
                    <img
                        src="https://i.imgur.com/yXOvdOSs.jpg"
                        alt="profile-image"
                        className='img'
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar
