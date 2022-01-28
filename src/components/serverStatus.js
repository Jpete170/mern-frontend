import { axiosGet } from "../api/db";
import React, {Component} from "react"

export default class ServerStatus extends Component{
    state = {
        statusDoc: [],
    }
    componentDidMount(){
        //axios call method here
    }

    getServerStatus(){
        //insert axios code here
    }

    render(){
        return(
            <div>
                <p>Placeholder Text</p>
            </div>
        )
    }
}