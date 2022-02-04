import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh'

//This is kept for development purposes
let accessToken = '';

const authURL = process.env.REACT_APP_URL_SECRET;
const authClient = process.env.REACT_APP_CLIENT_ID;
const authClientSecret = process.env.REACT_APP_CLIENT_SECRET;
const authAudience = process.env.REACT_APP_AUDIENCE;

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
let test;
export function getAPIToken(){

    axios(options)
    .then(response =>{
        //need a way to dynamically update the axios header
       let test1 = response.data.access_token;
       console.log(test1)
    })
    
}

export const axiosGet = axios.create({
    //set default options here
    baseURL: 'http://localhost:4000/api/v1',
    timeout: 3000,
    
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    },
});

const refreshAuthLogic = failedRequest => axios(options).then(tokenRefreshResponse =>{
    localStorage.setItem('token', tokenRefreshResponse.data.access_token);
    //test = tokenRefreshResponse;
    //failedRequest.response.defaults.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.access_token;
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.access_token;
    return Promise.resolve();
})

createAuthRefreshInterceptor(axiosGet, refreshAuthLogic, {statusCodes:[401, 403], retryInstance: axiosGet})
