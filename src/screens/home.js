import React, {Component} from "react";
import { getAPIToken } from "../api/db";
import { axiosGet } from "../api/db";

export default class Home extends Component{
    componentDidMount(){
        getAPIToken();
    }
    render(){
        return(
            <div>
            <div className="text-center text-decoration-underline">
                <h1>Listings Finder</h1>
            </div>
            <div class="">
                <p>This is the front end portion for my <a href="/">MERN Fullstack project</a>. This is a React project created using the Create React App CLI command, and uses <a href="?">Bootstrap</a> for CSS styling.</p>
            </div>
            <div>
                <div class="text-decoration-underline">
                    <h3>Disclaimer</h3>
                </div>
                <div>
                    <p>This project uses the sample data collections provided by <a href="#" class="">MongoDB</a>, and is not reflective of any actual data used by real world companies.</p>
                </div>
            </div>
            <div>
                <div class="text-decoration-underline">
                    <h3>Routes</h3>
                </div>
                <div>
                    <p>The current routes are available to browse / use:</p>
                    <div>
                        <div class="card" style={{width: '18rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">Airbnb Listings</h5>
                                <p class="card-text">This page will provide Airbnb listings from around the world.</p>
                                <a href="/airbnb" class="btn btn-primary">Go to Page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}