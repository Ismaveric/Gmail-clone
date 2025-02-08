import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AppsIcon from '@material-ui/icons/Apps';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';


function Header() {
const user = useSelector(selectUser);
const dispatch = useDispatch()
const signOut = () => {
  auth.signOut()
  .then(() => {
  dispatch(logout())

  })
}

  return (
    <div className='header'>
      <div className='header-left'>
        <IconButton>
            <MenuIcon />
        </IconButton>
        
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' 
        alt='image'></img>
        </div>
        <div className='header-middle'>
        <SearchIcon/>
        <input type="text" placeholder="Search mail"></input>
        <IconButton>
        <TuneIcon />
        </IconButton>
        </div>
        <div className="header-right">
          <IconButton>
             <HelpOutlineIcon/>
          </IconButton>
         <IconButton> 
          <SettingsIcon/>
         </IconButton>
         <IconButton>
         <AppsIcon/>
         </IconButton>
         <div className="username" onClick={signOut}>
        <Avatar fontSize="small" src={user?.photoUrl}>{user?.displayName[0]}</Avatar> 
        <p className='user'>
        <span>Logout</span>
          <span>{user?.displayName}</span></p>
        </div>
        </div>
        
    </div>
  )
}

export default Header
