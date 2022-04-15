import { useState, useEffect } from 'react'
import axios from 'axios'


const SignIn = () => {
    
    const BASE_URL = 'http://localhost:3000'

    const [form, setForm] = useState({
        userName: '',
        passWord: '',


    })

    const handleForm = async (e) => {
        await setForm({...form, [e.target.name]: e.target.value})
        
    }

    const handleCreate = async (e) => {
        await axios.post(`${BASE_URL}/signin`, form)
        e.preventDefault()
    }

    useEffect(() => {

    }, [form])



    return(
        <div className='signIn'>
            <h1>Please Sign in!</h1>

            
            <form>
            
            <label for='userName'> Enter your user name! : </label><br/>
            <input type='text' id='userName' name='userName' value={form.userName} />
            
            <label for='passWord'> Enter your password! : </label><br/>
            <input type='text' id='passWord' name='passWord' value={form.passWord}/>

            <button onClick={() => handleCreate()}> Sign In! </button>

            </form>

        </div>
    )
}

export default SignIn