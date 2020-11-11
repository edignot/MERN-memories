import axios from 'axios'

const url = 'http://localhost:8000/posts'

export const fetchPosts = async () => {
  return await axios.get(url)
}
