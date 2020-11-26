import React from 'react'
import RegisterImage from '../../assets/images/female.svg'
import {Link} from 'react-router-dom'

const Register = ()=>{
    return (
        <div id='auth-container'>
             <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={RegisterImage} alt='Register'/>
                    </div> 
                    <div id='form-section'>
                        <h2>Create an account</h2>
                        <form>
                            <div>
                            <div className='input-field mb-1'>
                                    <input placeholder='First name'/>
                                </div>
                                <div className='input-field mb-1'>
                                    <input placeholder='Last name'/>
                                </div>
                                <div className='input-field mb-1'>
                                    <select>
                                        <option vlaue='male'>Male</option>
                                        <option vlaue='female'>Female</option>
                                    </select>
                                </div>
                                <div className='input-field mb-1'>
                                    <input placeholder='Email'/>
                                </div>
                                <div className='input-field mb-2'>
                                    <input placeholder='Password'/>
                                </div>
                                <button>Register</button>
                            </div>
                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </form>
                    </div> 
                </div>
             </div>
        </div>
    )
}

export default Register