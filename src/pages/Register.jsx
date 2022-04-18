import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
    let navigate = useNavigate()

const BASE_URL = 'http://localhost:3000'    


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

   await RegisterUser({
       name: formValues.name,
       email: formValues.email,
       password: formValues.password
   })

   setFormValues({
       name: '',
       email: '',
       password: '',
       confirmPassword: ''
   })



}


useEffect(() => {

}, [])


return(
    <div className='Register'>

        <h1>Register Here!</h1>

        <form>
        
        
        <label htmlFor='email'> Enter your email </label>
        <input type='text' placeholder='Enter email here' onChange={handleChange} id='email' name='email' value={formValues.email} style={{ textAlign: 'center'}}/><br/>

        <label htmlFor='userName'> Create a username </label>
        <input type='text' placeholder='Enter user name here' id='userName' name='userName' onChange={handleChange} value={formValues.userName} style={{ textAlign: 'center'}}/><br/>


        <label htmlFor='password'> Create a password </label>
        <input type='text' placeholder='Enter password here' id='password' name='password' onChange={handleChange} value={formValues.password} style={{ textAlign: 'center'}}/><br/>

        <label htmlFor='confirmPassword'> Confirm password </label>
        <input type='text' placeholder='Confirm password here' id='confirmPassword' name='confirmPassword' onChange={handleChange} value={formValues.confirmPassword} style={{ textAlign: 'center'}}/><br/>



        <button onClick={() => handleSubmit()}> Register </button>

      
    
        </form>

    </div>
   
)
}

export default Register