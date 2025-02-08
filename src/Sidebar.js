import { Button, IconButton } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
import CreateIcon from '@material-ui/icons/Create';
import InboxIcon from '@material-ui/icons/Inbox';
import Sidebar_options from './Sidebar_options';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useDispatch } from 'react-redux';
import { openSendMail } from './features/mailSlice';


function Sidebar() {
const dispatch = useDispatch();

  return (
    <div className='sidebar'>
        <Button 
        className='compose'
        onClick= {() =>dispatch(openSendMail())}
        >
          <CreateIcon/>Compose</Button>
        <Sidebar_options Icon={InboxIcon} title='Inbox' number='42' selected={true}/>
        <Sidebar_options Icon={StarBorderIcon} title='Starred' number='42'/>
        <Sidebar_options Icon={AccessTimeIcon} title='Snoozed' number='42'/>
        <Sidebar_options Icon={SendIcon} title='Sent' number='42'/>
        <Sidebar_options Icon={InsertDriveFileOutlinedIcon} title='Draft' number='42'/>
        <Sidebar_options Icon={KeyboardArrowDownOutlinedIcon} title='More' number='42'/>

    <div className='label'>
        <p>Labels</p>
        <IconButton>
        <AddOutlinedIcon/>
        </IconButton>
       
        
    </div>
    </div>
    
  )
}

export default Sidebar