import React, {useState} from 'react'
import loginImage from '../../assets/images/male.svg'
import {Link} from 'react-router-dom'
//import axios from 'axios'

import './Auth.scss'
import AuthService from '../../services/authService'

const Login = ()=>{
    const [email,setEmail] = useState('john.doe@gmail.com')
    const [password,setPassword] = useState('secret')


    const submitForm = (e) => {
        e.preventDefault()

        AuthService.login({email, password})
            .then(res =>{

            })
            .catch(error =>{

            })
        /* axios.post('http://127.0.0.1:8081/login',{email, password})
            .then(res=>{
                console.log(res)
            })
            .catch(error =>{
                console.log(error)
            }) */
    }

    return (
        <div id='auth-container'>
             <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={loginImage} alt='Login'/>
                    </div> 
                    <div id='form-section'>
                        <h2>Welcome back</h2>
                        <form onSubmit={submitForm}>
                            <div>
                                <div className='input-field mb-1'>
                                    <input 
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    require='required'
                                    type='text'
                                    placeholder='Email'/>
                                </div>
                                <div className='input-field mb-2'>
                                    <input
                                    onChange={e => setPassword(e.target.value)} 
                                    value={password}
                                    require='required'
                                    type='password'
                                    placeholder='Password'/>
                                </div>
                                <button>LOGIN</button>
                            </div>
                        </form>
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div> 
                </div>
             </div>
        </div>
    )
}

export default Login