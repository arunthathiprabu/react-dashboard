import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import SnippetFolderRoundedIcon from '@mui/icons-material/SnippetFolderRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './SideNavbar.css'


const SideNavBar = () => {
    return <div>
        <div className='sidebar-container'>
            <div className='sidebar'>
                <HomeRoundedIcon />
                <EqualizerRoundedIcon />
                <NoteAltRoundedIcon />
                <SnippetFolderRoundedIcon />
                <ShoppingBagRoundedIcon />
                <LogoutRoundedIcon className='log-out-icon' />
            </div>
        </div>
    </div>
}

export default SideNavBar;
