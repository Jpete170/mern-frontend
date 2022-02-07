import React, {Component} from 'react'

export default class About extends Component{


    render(){

        return(
            <div class="">
                <div id="Initial Explanation">
                    <div class="text-center text-decoration-underline">
                        <h1>About this Project</h1>
                    </div>
                    <div>
                        <p>This project is the 'React' part of my MERN Full stack project; and was created using the "Create React App" functionality.</p>
                    </div>
                    <div>
                        <p>This project uses the following technologies, in addition to the React Framework:</p>
                        <ul>
                            <li><a href="https://axios-http.com/">Axios</a>, for handling HTTP requests to the Express.JS API endpoints</li>
                            <li>Axios-Auth-Refresh, which provides functionality to automatically refresh API tokens. Read more about it <a href="https://www.npmjs.com/package/axios-auth-refresh">here</a></li>
                            <li><a href="https://getbootstrap.com/">Bootstrap CSS</a>, for styling the project</li>
                            <li><a href="https://redux.js.org/">Redux</a>, for state management. Although currently it's not actively used, just integrated into the app for potential future use.</li>
                        </ul>
                    </div>
                </div>
                
                <div class="">
                    <div class="text-decoration-underline text-center">
                        <h2>Source Code</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="row">
                           <div class="card" style={{width: '18rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">GitHub Repository</h5>
                                <p class="card-text">This is the link to the React Code repository for this project's source code.</p>
                                <a href="https://github.com/Jpete170/mern-frontend" class="btn btn-primary">Go to Repository</a>
                            </div>
                        </div>
                        <div class="card mx-5" style={{width: '18rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">Project Details</h5>
                                <p class="card-text">This page on my main portfolio website will provide the overall details of the full stack project that this React app is a part of.</p>
                                <a href="#" class="btn btn-primary">Go to Page</a>
                            </div>
                        </div> 
                        </div>
                        
                    </div>
                </div>

                <div class="py-2">
                    <div class="text-decoration-underline">
                        <h2>How this app functions</h2>
                    </div>
                    <div class="">
                        <p>The main functionality of this application is requesting data from the Express.js API using the HTTP GET method via Axios.</p>
                        <p>The requested data from the API is returned in the JSON format, which allows this application to easily display it.</p>
                    </div>
                    <div>
                      <div class="text-decoration-underline">
                        <h3>Authentication</h3>
                        </div>
                        <div>
                            <p>In to ensure that only this application can access the backend API, the entire tech stack utilises API endpoint authentication using the tools provided by Auth0.</p>
                            <p>The way that this authentication works is that the Frontend requests a JavaScript Web Token from Auth0 itself, and then sends it to the backend when an API call is made. The backend will then authenticate the JWT to ensure that is correct, and corresponds with the token generated by Auth0.</p>
                        </div>  
                    </div>
                    
                </div>
            </div>
        )
    }
}