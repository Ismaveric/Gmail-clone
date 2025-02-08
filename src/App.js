import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from './Mail';
import MailList from './MailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux'
import { selectsendMailIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
const sendMailIsOpen = useSelector(selectsendMailIsOpen);
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged(user => { 
    if(user){
      dispatch(login({
        displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
      }));
    }
  })  
}, [])


  return (
    <Router>
     {!user? (
      <Login />
     ) : (
      
      <div className="App">
      <Header />
      
      <div className="body">
      <Sidebar />

      <Routes>
        <Route path='/Mail' element={<Mail />} />
        
        <Route path='/' element= {<MailList />} />
      </Routes>
      </div>
      {sendMailIsOpen && <SendMail />}
      </div>
      )
     }
    
    </Router>
  );
}

export default App;
