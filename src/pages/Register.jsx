import { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'


const Register = () => {

const BASE_URL = 'http://localhost:3000'    


const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: ''
})

const handleForm = async (e) => {
    await setForm({...form, [e.target.firstName]: e.target.value})
    console.log(form)
}

const handleCreate = async (e) => {
    await axios.post(`${BASE_URL}/register`, form)
    e.preventDefault()

}


useEffect(() => {

}, [form])


return(
    <div className='Register'>

        <h1>Register Here! </h1>

        <form>
        
        <label for='firstName'> Enter your first name! : </label><br/>
        <input type='text' id='firstName' name='firstName' value={form.firstName} />
        
        <label for='lastName'> Enter your last name! : </label><br/>
        <input type='text' id='lastName' name='lastName' value={form.lastName}/>

        <label for='userName'> Choose a username!: </label><br/>
        <input type='text' id='userName' name='userName' value={form.userName}/>

        <label for='email'> Enter your email!: </label><br/>
        <input type='text' id='email' name='email' value={form.email}/>
    
        </form>

    </div>
   
)
}

export default Register