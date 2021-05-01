import React from 'react'
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import CompanyLogo from "./heart-love-fire-flame-logo.png"
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            
            <IconButton>
            <AccountCircleIcon fontSize="large" className="header_icon"/>
            </IconButton>            
        

            <img 
                src={CompanyLogo}
                className="header_logo"                
                alt=":)"
            />

            <IconButton>        
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton> 

        </div>
    )
}

export default Header
