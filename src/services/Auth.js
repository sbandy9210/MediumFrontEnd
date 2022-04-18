import Client from './api'

const signInUser = async (data) => {
    try {
        const res = await Client.post('/auth/login', data)
        localStorage.setItem('token', res.data.token)
        return res.data.user
    }catch (error) {
        throw error
    }
} 

const RegisterUser = async (data) => {
    try {
        const res = await Client.post('/auth/register', data)
        return res.data
    } catch (error) {
        throw error
    }
} 

export { 
signInUser,
RegisterUser
}
