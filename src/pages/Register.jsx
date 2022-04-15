import { useState } from 'react'
import ReactDom from 'react-dom'


const Register = () => {
const [name, setName] = useState('')


return(
    <form>
        <label> Enter username: 
            <input
                type='text'
                value={name}
                onchange={(e) => setName(e.target.value)}
                />

        </label>
    </form>
)
}

export default Register