import { axiosGet } from "../api/db";
import axios from "axios";
import React, {Component} from "react"

export default class ServerStatus extends Component{
    state = {
        statusDoc: [],
    }
    componentDidMount(){
        //axios call method here
        this.getServerStatus()
    }

    getServerStatus(){
        //insert axios code here
        axiosGet('/status/', {
            params:{},
            responseType: 'json'
        }).then(response =>{
            const statusDoc = response.data;
            this.setState({statusDoc})
        })
        .catch(
            error => console.error(`Error: ${error}`)
        )
    }

    render(){
        return(
            <div>
                <p>Server Status: {this.state.statusDoc.status}</p>
            </div>
        )
    }
}