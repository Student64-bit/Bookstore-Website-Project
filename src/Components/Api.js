import axios from 'axios';

const baseURL = 'http://localhost:5000';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (username, password) => {
  try {
    const response = await api.post('/login', { username, password });

    if (response.status === 200) {
      return response.data; 
    } else {
      throw new Error('Login failed: Unexpected status code');
    }
  } catch (error) {
    if (error.response) {
      console.error('Login failed:', error.response.data); 
      throw new Error('Login failed: Server error');
    } else if (error.request) {
      console.error('Login failed:', error.request);
      throw new Error('Login failed: No response received');
    } else {
      console.error('Login failed:', error.message);
      throw new Error('Login failed: Request setup error');
    }
  }
};
