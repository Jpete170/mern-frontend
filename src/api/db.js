import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh'

//This is kept for development purposes
let accessToken = '';

const authURL = process.env.REACT_APP_URL_SECRET;
const authClient = process.env.REACT_APP_CLIENT_ID;
const authClientSecret = process.env.REACT_APP_CLIENT_SECRET;
const authAudience = process.env.REACT_APP_AUDIENCE;

const baseURL = process.env.REACT_APP_BASEURL;




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
    baseURL: `${baseURL}`,
    timeout: 3000,
    
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    },
});

const refreshAuthLogic = failedRequest => axios(options).then(refreshResponse =>{
    localStorage.setItem('access_token', refreshResponse.data.access_token);
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + refreshResponse.data.access_token;
    axiosGet.defaults.headers.common['Authorization'] = 'Bearer ' + refreshResponse;
    return Promise.resolve();
})

createAuthRefreshInterceptor(axiosGet, refreshAuthLogic, {statusCodes:[401, 403], })

