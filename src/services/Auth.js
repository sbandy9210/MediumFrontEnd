import Client from './api'

const SignInUser = async (data) => {
    try {
        const res = await Client.post('/api/login', data)
        localStorage.setItem('token', res.data.token)
        return res.data.user
    }catch (error) {
        throw error
    }
} 

const RegisterUser = async (data) => {
    try {
        const res = await Client.post('/api/register', data)
        return res.data
    } catch (error) {
        throw error
    }
} 

const CheckSession = async () => {
    try {
      const res = await Client.get('/api/session')
      return res.data
    } catch (error) {
      throw error
    }
}

export { 
    SignInUser,
    RegisterUser,
    CheckSession,
}
