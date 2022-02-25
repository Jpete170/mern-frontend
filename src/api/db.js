import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh'

//This is kept for development purposes
let AuthToken;

const authURL = process.env.REACT_APP_URL_SECRET;
const authClient = process.env.REACT_APP_CLIENT_ID;
const authClientSecret = process.env.REACT_APP_CLIENT_SECRET;
const authAudience = process.env.REACT_APP_AUDIENCE;

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

const axiosGet = axios.create({
    //set default options here
    baseURL: `${URL}`,
    //baseURL: 'https://express-webapp-jpete.herokuapp.com/api/v1',
    timeout: 3000,
    
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer`
    },
});
/*
function getToken(){
    let token;

    axios(options).then(response=>{
       return token = response.data.access_token;
    })
    console.log(token)
}

const tokenGet = axios(options).then(response =>{
    let token = response.data.access_token;
    return Promise.resolve();
})
*/
const refreshAuthLogic = failedRequest => axios(options).then(refreshResponse =>{
    //localStorage.setItem('token', refreshResponse.data.access_token);
    AuthToken = 'Bearer '+ refreshResponse.data.access_token;
    //localStorage.setItem('access_token', AuthToken)
    failedRequest.response.config.headers['Authorization'] = AuthToken;
    
    return Promise.resolve();
})

createAuthRefreshInterceptor(axiosGet, refreshAuthLogic, {statusCodes:[401, 403], })

export default axiosGet;