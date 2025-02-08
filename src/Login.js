import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
const dispatch = useDispatch();
 const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(({ user }) => {
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
        }));
    }).catch(error => 
      alert(error.message)
    );
 }

  return (
    <div className='login'>
        <div className="login-container">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WdtWKYIx09KC9jN3L87mgntqtQwN1lMf0Q&usqp=CAU' 
        alt=''></img>
        <button onClick={signIn}>Login</button>
        </div>

    </div>
  )
}

export default Login