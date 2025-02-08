import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import React from 'react'
import './MailRow.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';


function MailRow ({id, title, description, subject, time}) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const openMail = () => {
        dispatch(selectMail({
            id, 
            title, 
            description, 
            subject, 
            time,
        }))
        navigate('/Mail')
    }

  return (
    <div onClick={openMail}  
         className='mail_row'>
        <div className="list_options">
           <IconButton>
           <Checkbox/>
            </IconButton> 
            <IconButton>
            <StarBorderIcon/>
            </IconButton>
        </div>
        <div className="title">
            <h3>{title}</h3>
        </div>
        <div className="message">
            <h3>{subject}</h3>
            <small>{'-'}{''}{description}</small>
            </div>
        <div className="row_options">
            <IconButton>
            <SystemUpdateAltIcon/>
            </IconButton>
            <IconButton>
                <DeleteOutlineIcon/>
            </IconButton>
            <IconButton>
                <DraftsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <AccessTimeOutlinedIcon/>
            </IconButton>
        </div>
        
        <div className="time">
            <h4>{time}</h4>
        </div>
        
    </div>
  )
}

export default MailRow