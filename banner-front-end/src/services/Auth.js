import Client from './api'

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('api/user/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.bandleader
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/api/user/register', data)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('api/user/session')
    return res.data
  } catch (error) {
    throw error
  }
}