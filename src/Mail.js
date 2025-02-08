import React from 'react'
import './Mail.css';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import InputIcon from '@material-ui/icons/Input';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button, IconButton } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import ReplyIcon from '@material-ui/icons/Reply';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';



function Mail() {
const navigate = useNavigate();
const selectedMail = useSelector(selectOpenMail)

  return (
    <div className='mail'>
      <div className="mail_header">
      <div className="mail_header-left">
      <div className="icon_label">
      <IconButton>
    <ArrowBackIcon onClick ={() => navigate('/')}  />
      </IconButton>
     <small className='labels'>Back to inbox</small></div>
        <div className="icon_label">
          <IconButton>
          <ArchiveOutlinedIcon/>
        </IconButton>
        <small className='labels'>Archive</small>
        </div>
        <div className="icon_label">
        <IconButton>
        <ReportOutlinedIcon/>
        </IconButton>
        <small className='labels'>Report spam</small>
        </div>
        <div className="icon_label">
        <IconButton>
        <DeleteOutlineIcon/>
        </IconButton>
        <small className='labels'>Delete</small>
        </div>
        <div className="divider"></div>
        <div className="icon_label">
        <IconButton>
        <EmailOutlinedIcon/>
        </IconButton>
        <small className='labels'>Mark a read</small>
        </div>
        <div className="icon_label">
        <IconButton>
        <AccessTimeIcon/>
        </IconButton>
        <small className='labels'>Snooze</small>
        </div>
        <div className="icon_label">
        <IconButton>
          <PlaylistAddRoundedIcon />
        </IconButton>
        <small className='labels'>Add to task</small>
        </div>
        <div className="icon_label">
        <IconButton>
        <InputIcon />
        </IconButton>
        <small className='labels'>Move to</small>
        </div>
        <div className="divider"></div>
        <div className="icon_label">
        <IconButton>
        <LabelOutlinedIcon/>
        </IconButton>
        <small className='labels'>Labels</small>
        </div>
        <div className="icon_label">
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
        <small className='labels'>More</small>
        </div>
      </div>

        <div className="mail_header-right">
          <small>1 of 1,000</small>
          <div className="icon_label">
            <IconButton>
              <ChevronLeftIcon/>
            </IconButton>
            <small className='labels'>Newer</small>
            </div>
            <div className="icon_label">
            <IconButton>
              <ChevronRightIcon/>
            </IconButton>
            <small className='labels'>Older</small>
            </div>
        </div>
      </div>
      <div className="mail_body">
          <div className="mail_body-subject">
            <h3>{selectedMail?.subject}</h3>
            <button className='inbox'>inbox</button>
            <div className="subject-icons">
            <div className="icon_label">
            <PrintOutlinedIcon/>
            <small className='labels'>Print</small>
            </div>
            <div className="icon_label">
            <OpenInNewOutlinedIcon/>
            <small className='labels'>Open in new window</small>
            </div>
            </div>
          </div>
          <div className="mail-body-info">
            <div className="info-left">
              <div className="sender">
            <h4>{selectedMail?.title}</h4>
            <span className='sender-mail'>{'<'}noreply@gmail.com{'>'}</span>
            </div>
            <div className="reciever">
            <p>to me</p><ArrowDropDownOutlinedIcon/>
            </div>
            </div>

            <div className="info-right">
              <p>{selectedMail?.time}</p>
              <div className="info-icons">
              <IconButton>
              <GradeOutlinedIcon/>
              </IconButton>
              <small className='labels'>Not starred</small>
              </div>
              <div className="info-icons">
              <IconButton>
              <ReplyIcon/>
              </IconButton>
              <small className='labels'>Reply</small>
              </div>
              <div className="info-icons">
              <IconButton>
                <MoreVertIcon/>
              </IconButton>
              <small className='labels'>More</small>
              </div>              
            </div>
          </div>
          <div className="mail_message">
           {selectedMail.description}
          </div>
          <div className="message_options">
          <Button className='reply'> <ReplyIcon/>Reply</Button>
        <Button className='forward'> <ArrowRightAltIcon/>Forward</Button>
        
        </div>
        </div>  
    </div>
  )
}

export default Mail