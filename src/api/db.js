import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh'

//This is kept for development purposes
let accessToken = '';

const authURL = process.env.REACT_APP_URL_SECRET;
const authClient = process.env.REACT_APP_CLIENT_ID;
const authClientSecret = process.env.REACT_APP_CLIENT_SECRET;
const authAudience = process.env.REACT_APP_AUDIENCE;

const baseURL = process.env.REACT_APP_BASE_URL;

let URL = (process.env.NODE_ENV == "production") ? "https://express-webapp-jpete.herokuapp.com/api/v1" : "http://localhost:4000/api/v1"

const options = {
    method: 'post',
    url: `${authURL}`,
    headers:{
        'content-type': 'application/json',
    },
    data: {
        "client_id": `${authClient}`,
        "client_secret":`${authClientSecret}`,
        "audience":`${authAudience}`,
        "grant_type":"client_credentials"
    },
};


export const axiosGet = axios.create({
    //set default options here
    baseURL: `${URL}`,
    //baseURL: 'https://express-webapp-jpete.herokuapp.com/api/v1',
    timeout: 3000,
    
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    },
});

const refreshAuthLogic = failedRequest => axios(options).then(refreshResponse =>{
    //localStorage.setItem('access_token', refreshResponse.data.access_token);
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + refreshResponse.data.access_token;
    axiosGet.defaults.headers.common['Authorization'] = 'Bearer ' + refreshResponse.data.access_token;
    return Promise.resolve();
})

createAuthRefreshInterceptor(axiosGet, refreshAuthLogic, {statusCodes:[401, 403], })
