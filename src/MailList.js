import React, { useEffect, useState } from 'react';
import './MailList.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import { IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InboxIcon from '@material-ui/icons/Inbox';
import Sections from './Sections';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import MailRow from './MailRow';
import { db } from './firebase';

function MailList() {
const [emails, setEmails] = useState([]);

useEffect(() => {
  db.collection('emails')
  .orderBy('timestamp', 'desc')
  .onSnapshot((snapshot) =>  
    setEmails(snapshot.docs.map((doc) => ({
       id: doc.id,
       data: doc.data(),
    }))))
}, [])

  return (
    <div className='maillist'>
      <div className="list-header">
      <div className="list-header_left">
        <IconButton>
        <CheckBoxOutlineBlankIcon/>
        </IconButton>
        <IconButton>
        <ArrowDropDownIcon/>
        </IconButton>
        <IconButton>
        <RefreshIcon/>
        </IconButton>
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
      </div>
      <div className="list-header_right">
        <p className='amount'>1-50 of 1,000</p>
        <IconButton>
          <ChevronLeftIcon/>
        </IconButton>
        <IconButton>
          <ChevronRightIcon/>
        </IconButton>
      </div>
      </div>
      <div className="mail-list_sections">
        <Sections Icon={InboxIcon} title="Primary" color='blue' selected={true} />
        <Sections Icon={LocalOfferIcon} title="Promotions" color='red'  />
        <Sections Icon={PeopleIcon} title="Social" color='green'  />
      </div>
      <div className="mail-row">
        {emails.map(({ id, data: { email, subject, message, timestamp} }) => {
         return( <MailRow
            id={id}
            key={id}
            title={email}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
             />
         )
        }
        )}
      </div>
    </div>
  )
}

export default MailList
