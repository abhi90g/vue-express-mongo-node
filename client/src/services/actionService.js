import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api/actions',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getActionsData() {
    return apiClient.get(apiClient.baseURL)
  }
}
