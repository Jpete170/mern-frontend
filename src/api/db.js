import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh'

//This is used in the auto-refresh logic for auth tokens, it's declared here for prior development purposes
let AuthToken;

const authURL = process.env.REACT_APP_URL_SECRET;
const authClient = process.env.REACT_APP_CLIENT_ID;
const authClientSecret = process.env.REACT_APP_CLIENT_SECRET;
const authAudience = process.env.REACT_APP_AUDIENCE;

let URL = (process.env.NODE_ENV == "production") ? "https://express-webapp.onrender.com/api/v1" : "http://localhost:4000/api/v1"

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

const getStorageToken = sessionStorage.getItem('access_token')

const axiosGet = axios.create({
    //set default options here
    baseURL: `${URL}`,
    timeout: 10000,
    
    headers: {
        'content-type': 'application/json',
        'Authorization': `${getStorageToken}`,
        'Access-Control-Allow-Origin': 'localhost:3000/',
    },
});
//Handle the automatic refreshing of authentication tokens
const refreshAuthLogic = failedRequest => axios(options).then(refreshResponse =>{
    AuthToken = 'Bearer '+ refreshResponse.data.access_token;
    sessionStorage.setItem('access_token', AuthToken)
    failedRequest.response.config.headers['Authorization'] = AuthToken;
    
    return Promise.resolve();
})

createAuthRefreshInterceptor(axiosGet, refreshAuthLogic, {statusCodes:[401, 403], })

export default axiosGet;