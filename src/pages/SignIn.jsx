import { useState } from 'react'
import { signInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const SignIn = () => {
    
    const BASE_URL = 'http://localhost:3000'

    const [form, setForm] = useState({
        userName: '',
        passWord: ''


    })

    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        
    }

    const handleCreate = async (e) => {
        await axios.post(`${BASE_URL}/SignIn`, form)
        e.preventDefault()
    }

   



    return(
        <div className='SignIn'>
            
            <h1>Please Sign in!</h1>

            
            <form>
            
            <label for='userName'> Enter your user name </label>
            <input type='text' id='userName' placeholder='Enter user name here' name='userName' onChange={handleForm} value={form.userName} /><br/>
            
            <label for='passWord'> Enter your password </label>
            <input type='text' id='passWord' placeholder='Enter password here' name='passWord' onChange={handleForm} value={form.passWord}/><br/>

            <button onClick={() => handleCreate()}> Sign In! </button>

            </form>

        </div>
    )
}

export default SignIn