import React, {Component} from "react";
import { authInit, axiosGet } from "../../api/db";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


export default class AirbnbIndex extends Component{
    
    state = {
        docsArray: [],
        singleDoc: [],
    }
    
    componentDidMount(){
        this.loadIndexData();
        
    }

    loadIndexData(){
        axiosGet('/airbnb/index',{
            responseType: 'json'
        }).then( response=>{
            //console.log(response)
            const docsArray = response.data;
            this.setState({docsArray})
        }
        ).catch(
            error => console.error(`Error: ${error}`)
        )
    };

    handleReduxUpdate(){
        //code to update Redux store will go here
        console.log("Redux Store Updated")
    }
        //initial axiosGet call will be here)
    render(){
        return(
            <div>
            <div className="d-flex align-content-center text-center">
                <div id='docs' class="">
                    <p>The Index page for the AirBnB API Route</p>
                    {this.state.docsArray.map((item) =>
                    <div class="card" style={{width: '48rem', margin: 10}}>
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">{item.summary}</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href={`/airbnb/${item._id}`} role="button" class="btn btn-primary" onClick={this.handleReduxUpdate()}>Go to Page</a> {/**May have to update this to a proper button to handle the onClick() event */}
                            </div>
                            
                        </div>
                    </div>
                    
                    )}
                    
                </div>
            </div>
        </div> 
        )
    }
}
/*
const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AirbnbIndex)*/