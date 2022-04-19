import { useState, useContext } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import DataContext from '../components/DataContext'



const SignIn = (props) => {
    // const { setUser, setAuthenticated } = useContext(DataContext)
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        
        setFormValues({
            username: '',
            password: ''
        })
        props.setUser(payload)
        props.setAuthenticated(true)
        navigate('/blog/create')
    }

    return(
        <div className='SignIn'>
            
            <h1>Please Sign in!</h1>
    
            <form className='signin' onSubmit={handleSubmit}>
            
            <label htmlFor='username'> Enter your username </label>
            <input 
                type='text' 
                id='username' 
                placeholder='Enter username here' 
                name='username' 
                onChange={handleChange} 
                value={formValues.username}
                style={{ textAlign: 'center'}}
             /> <br/>
            
            <label for='password'> Enter your password </label>
            <input 
                type='password' 
                id='password' 
                placeholder='Enter password here' 
                name='password' 
                onChange={handleChange} 
                value={formValues.password}
                style={{ textAlign: 'center'}}
            /> <br/>

            <button 
            type='submit'
            disabled={!formValues.username || !formValues.password}> Sign In! </button>

            </form>

        </div>
    )
}

export default SignIn