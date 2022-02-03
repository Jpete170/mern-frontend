import axios from "axios";

//This is kept for development purposes
let accessToken = process.env.REACT_APP_API_TOKEN;

const authURL = process.env.REACT_APP_URL_SECRET;
const authClient = process.env.REACT_APP_CLIENT_ID;
const authClientSecret = process.env.REACT_APP_CLIENT_SECRET;
const authAudience = process.env.REACT_APP_AUDIENCE;

export function getAPIToken(){

    let options = {
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

    axios(options)
    .then(response =>{
        //need a way to dynamically update the axios header
       let accessTokenJSON = response.data.access_token;
    })
    
}

export const axiosGet = axios.create({
    //set default options here
    baseURL: 'http://localhost:4000/api/v1',
    timeout: 3000,
    
    headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${accessToken}`
    },
});

