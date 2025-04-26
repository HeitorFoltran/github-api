import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const endpoint = (username: string) => {
  return api.get(`/users/${username}`)
}
