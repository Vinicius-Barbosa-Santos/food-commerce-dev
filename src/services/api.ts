import axios from 'axios'

const api = axios.create({
  baseURL: ' https://db-food-commerce-dev.vercel.app',
})

export default api
