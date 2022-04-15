import { useState, useEffect } from 'react'
import axios from 'axios'


const Register = () => {

const BASE_URL = 'http://localhost:3000'    


const [form, setForm] = useState({
    
    email: '',
    userName: '',
    passWord: '',
    confirmPassWord: ''
})

const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    
}

const handleCreate = async (e) => {
    await axios.post(`${BASE_URL}/register`, form)
    e.preventDefault()

}


useEffect(() => {

}, [])


return(
    <div className='Register'>

        <h1>Register Here!</h1>

        <form>
        
        
        <label htmlFor='email'> Enter your email!: </label>
        <input type='text' placeholder='Enter email here' onChange={handleForm} id='email' name='email' value={form.email}/><br/>

        <label htmlFor='userName'> Create a username!: </label>
        <input type='text' placeholder='Enter user name here' id='userName' name='userName' onChange={handleForm} value={form.userName}/><br/>

        <label htmlFor='passWord'> Create a password!: </label>
        <input type='text' placeholder='Enter password here' id='passWord' name='passWord' onChange={handleForm} value={form.passWord}/><br/>

        <label htmlFor='confirmPassWord'> Confirm password!: </label>
        <input type='text' placeholder='Confirm password here' id='confirmPassWord' name='confirmPassWord' onChange={handleForm} value={form.confirmPassWord}/><br/>



        <button onClick={() => handleCreate()}> Register </button>

      
    
        </form>

    </div>
   
)
}

export default Register