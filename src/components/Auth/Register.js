import React, {useState} from 'react'
import RegisterImage from '../../assets/images/female.svg'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {register} from '../../store/actions/auth'

const Register = ({history})=>{

    const dispatchEvent = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')

    /* const handleFirstName = (e) =>{
        setFirstName(e.target.value)
    } */

    const submitForm = (e) =>{
        e.preventDefault()
        dispatchEvent(register({firstName, lastName, gender, email, password}, history))
    }

    return (
        <div id='auth-container'>
             <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={RegisterImage} alt='Register'/>
                    </div> 
                    <div id='form-section'>
                        <h2>Create an account</h2>
                        <form onSubmit={submitForm}>
                            <div>
                            <div className='input-field mb-1'>
                                    <input 
                                        onChange={e => setFirstName(e.target.value)}
                                        value={firstName}
                                        required='required'
                                        type='text'
                                        placeholder='First name'/>
                                </div>
                                <div className='input-field mb-1'>
                                    <input
                                        onChange={e => setLastName(e.target.value)}
                                        value={lastName}
                                        required='required'
                                        type='text' 
                                        placeholder='Last name'/>
                                </div>
                                <div className='input-field mb-1'>
                                    <select
                                         onChange={e => setGender(e.target.value)}
                                         value={gender}
                                         required='required'>
                                        <option vlaue='male'>Male</option>
                                        <option vlaue='female'>Female</option>
                                    </select>
                                </div>
                                <div className='input-field mb-1'>
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        required='required'
                                        type='text'  
                                        placeholder='Email'/>
                                </div>
                                <div className='input-field mb-2'>
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        required='required'
                                        type='password'   
                                        placeholder='Password'/>
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