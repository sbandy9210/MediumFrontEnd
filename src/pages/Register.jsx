import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import axios from 'axios'


const Register = () => {
    let navigate = useNavigate()

// const BASE_URL = 'http://localhost:3000'    


const [formValues, setFormValues] = useState({
    email: '',
    userName: '',
    password: '',
    confirmPassword: ''
})

const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
    
}

const handleSubmit = async (e) => {
   e.preventDefault()

//    await RegisterUser({
//        username: formValues.name,
//        email: formValues.email,
//        password: formValues.password
//    })
console.log('register')

   setFormValues({
       name: '',
       email: '',
       password: '',
       confirmPassword: ''
   })

   navigate('/SignIn')



}





return(
    <div className='Register'>

        <h1>Register Here!</h1>

        <form className='register' onSubmit={handleSubmit}>
        
        
        <label htmlFor='email'> Enter your email </label>
        <input 
            type='text' 
            placeholder='Enter email here' 
            onChange={handleChange} 
            id='email' 
            name='email' 
            value={formValues.email} 
            style={{ textAlign: 'center'}}
            required
        /> <br/>

        <label htmlFor='userName'> Create a username </label>
            <input 
            type='text' 
            placeholder='Enter user name here' 
            id='userName' 
            name='userName' 
            onChange={handleChange} 
            value={formValues.userName} 
            style={{ textAlign: 'center'}}
            required
        /> <br/>


        <label htmlFor='password'> Create a password </label>
        <input 
            type='password' 
            placeholder='Enter password here' 
            id='password' 
            name='password' 
            onChange={handleChange} 
            value={formValues.password} 
            style={{ textAlign: 'center'}}
            required
        /> <br/>

        <label htmlFor='confirmPassword'> Confirm password </label>
        <input 
            type='password' 
            placeholder='Confirm password here' 
            id='confirmPassword' 
            name='confirmPassword' 
            onChange={handleChange} 
            value={formValues.confirmPassword} 
            style={{ textAlign: 'center'}}
            required
        /> <br/>



        <button 
        type='submit'
        disabled={
            !formValues.email || !formValues.userName || !formValues.password || !formValues.confirmPassword ||
            !(
                formValues.confirmPassword === formValues.password)}
                > Register </button>

      
    
        </form>

    </div>
   
)
}

export default Register