import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../../Config/Config'

export default function Signup(props) {

    const [fullName,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [registrationError,setRegistrationError] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(fullName, email, password);
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('users').doc(cred.user.uid).set({    // storing the user data in database
                FullName: fullName,
                Email: email,
                Password: password
            }).then(() => {
                setFullName('');
                setEmail('');
                setPassword('');
                setRegistrationError('');
                props.history.push('/login');  // we did this bcuz we about to go to login component
            }).catch(err => setRegistrationError(err.message))
        }).catch(err => setRegistrationError(err.message))
    };

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h2>REGISTER HERE</h2>
            <br></br>
            <form autoComplete='off' className='form-group'
            onSubmit={handleRegister}>
                <label>Enter Full Name</label>
                <input type='text' className='form-control' required
                    onChange={(e) => setFullName(e.target.value)} 
                    value={fullName}
                />
                <br></br>
                <label>Enter Email</label>
                <input type='email' className='form-control' required 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                />
                <br></br>
                <label>Enter Password</label>
                <input type='password' className='form-control' required 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                />
                <br></br>
                <button type='submit' className='btn btn-success mybtn2'>REGISTER</button>
            </form>
            {
                registrationError && <div className='error-msg'>
                    {registrationError}
                </div>
            }

            <span>Already have an account? login
                <Link to='login'>here</Link>
            </span>
        </div>
    )
}
