//Placeholder file for eventual backend connection
import axios from "axios";
import db from "./db.json"

//const access_token = process.env.ACCESS_TOKEN;

export const axiosGet = axios.create({
    //set default options here
    baseURL: 'http://localhost:4000/api/v1',
    timeout: 1000,
    
    headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${db.access_token}`
    }
    
});