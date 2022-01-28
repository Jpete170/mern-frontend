//Placeholder file for eventual backend connection
import axios from "axios";
const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;
//const access_token = process.env.ACCESS_TOKEN;

export const axiosGet = axios.create({
    //set default options here
    baseURL: 'http://localhost:4000/api/v1',
    timeout: 3000,
    
    headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${accessToken}`
    },
});