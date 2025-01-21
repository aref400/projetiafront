import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081', // Remplace par l'URL de ton serveur backend Java
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
