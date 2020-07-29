import React,{ useState } from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory()

    const login = event =>{
        event.preventDefault() // this stops the refresh

        // login logic

        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                // logged in, redirect to home
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    const register = event =>{
        event.preventDefault() // this stops the refresh

        // register logic
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth )=>{
                // create a user and logged in
                history.push('/')
            })
            .catch(e=> alert(e.message))
        
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                className='login__logo' 
                alt=''
                src='http://pngimg.com/uploads/amazon/amazon_PNG24.png' />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form >
                    <h5>Email</h5>
                    <input value={email} onChange={(event)=> setEmail(event.target.value)} type="email"/>

                    <h5>Password</h5>
                    <input value={password} onChange={(event)=> setPassword(event.target.value)} type="password"/>

                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                 
                 <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
