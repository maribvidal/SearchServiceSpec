import axios from "axios";

// eslint-disable-next-line no-unused-vars
const BACKEND_URL = 'http://localhost:3000';

const testAPI = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: { 
    'Content-Type': 'application/json' 
    },
});

export default testAPI;