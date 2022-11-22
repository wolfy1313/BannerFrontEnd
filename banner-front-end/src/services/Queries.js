import Client from './api'

export const newStudent = async (data) => {
  try {
    const response = await Client.post('/api/student/', data)
    return response.data
  } catch (error) {
    throw error
  }
}

export const newClass = async (data) => {
  try {
    const response = await Client.post('/api/class/', data)
    return response.data
  } catch (error) {
    throw error
  }
}
