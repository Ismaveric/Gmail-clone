import React from 'react'
import './SendMail.css';
import MinimizeIcon from '@material-ui/icons/Minimize';
import HeightIcon from '@material-ui/icons/Height';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import EjectOutlinedIcon from '@material-ui/icons/EjectOutlined';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMail } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (formData) => {
        console.log(formData)
        db.collection('emails').add(
            {
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            dispatch(closeSendMail())
    };
    
    const dispatch = useDispatch();

  return (
    <div className='send_mail'>
        <div className="send-mail_header">
            <h3>New message</h3>
            <span className='header-icons'>
                <IconButton>
                <MinimizeIcon/>
                </IconButton>
                <IconButton>
                <HeightIcon className='full'/>
                </IconButton>
                <IconButton>
                <CloseIcon onClick={() => dispatch(closeSendMail())}/>
                </IconButton>
            </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                type="email" 
                name="email"  
                placeholder='To'
                 {...register ( "email", {required : true}) } />
                 {errors.email && <p className="mail_error">Reciepient mail is required</p>}
                <input 
                type="text" 
                name='subject'
                placeholder='Subject' 
                {...register ("subject", {required : true}) }/>
                 {errors.subject && <p className='mail_error'>Subject is required</p>}
                <textarea
                type="text" 
                name="message"   
                className='mail-message' 
                {...register ("message",{required : true}) } />
                
                <div className="form-footer">
                <button type='submit' className='send'>Send</button>
                <IconButton >
                    <SpellcheckIcon />
                </IconButton>
                <IconButton>
                <AttachFileIcon />
                </IconButton>
                <IconButton>
                <InsertLinkIcon/>
                </IconButton>
                <IconButton>
                    <SentimentSatisfiedIcon />
                </IconButton>
                <IconButton>
                    <EjectOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PhotoOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LockOpenOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <CreateOutlinedIcon/>
                </IconButton>
                <IconButton>
                <MoreVertOutlinedIcon/>
                </IconButton>
                <IconButton>
                <DeleteOutlinedIcon className='delete-mail'/>
                </IconButton>
                </div>
            </form>

        </div>
  )
}

export default SendMail