import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'



const Register = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})   
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await RegisterUser({
            username: formValues.username,
            email: formValues.email,
            register_password: formValues.password
        })

        setFormValues({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
        })

        navigate('/Login')
    }

    return(
        <div className='Register'>
            <h1>Sign Up.</h1>
            <br/>

            <form className='register' onSubmit={handleSubmit}>
                <div className='emailContainer'>
                    <input 
                        className='email' 
                        type='text' 
                        placeholder='Enter your email' 
                        onChange={handleChange} 
                        id='email' 
                        name='email' 
                        value={formValues.email} 
                        style={{ textAlign: 'center'}}
                        required
                    /> <br/>
                </div>
                <div className='usernameContainer'>
                    <input 
                        type='text' 
                        placeholder='Create your username' 
                        id='username' 
                        name='username' 
                        onChange={handleChange} 
                        value={formValues.username} 
                        style={{ textAlign: 'center'}}
                        required
                    /> <br/>
                </div>
                <div className='passwordContainer'>
                    <input 
                        type='password' 
                        placeholder='Create a password' 
                        id='password' 
                        name='password' 
                        onChange={handleChange} 
                        value={formValues.password} 
                        style={{ textAlign: 'center'}}
                        required
                    /> <br/>
                </div>
                <div className='comfirmPasswordContainer'>
                    <input 
                        type='password' 
                        placeholder='Confirm password' 
                        id='confirmPassword' 
                        name='confirmPassword' 
                        onChange={handleChange} 
                        value={formValues.confirmPassword} 
                        style={{ textAlign: 'center'}}
                        required
                    /> <br/>
                </div>
                <button className='registerButton' type='submit'
                    disabled={
                        !formValues.email || !formValues.username || !formValues.password || !formValues.confirmPassword ||
                        !(
                            formValues.confirmPassword === formValues.password)}
                    > Register </button>
            </form>
        </div>
    )
}

export default Register