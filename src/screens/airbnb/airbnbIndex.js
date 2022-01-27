import React, {Component} from "react";
import { authInit, axiosGet } from "../../api/db";
import axios from "axios";
export default class AirbnbIndex extends Component{
    
    state = {
        docsArray: [],
        singleDoc: [],
    }
    
    componentDidMount(){
        this.testAxios();
    }
    testAxios(){
        axiosGet('/airbnb',{
            responseType: 'json'
        }).then( response=>{
            console.log(response)
        }
        ).catch(
            
        )
    }
        //initial axiosGet call will be here)
    render(){
        return(
            <div>
            <div className="">
                <p class="">The Index page for the AirBnB API Route</p>
            </div>
        </div> 
        )
    }
}

