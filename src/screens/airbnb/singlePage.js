import React, {Component} from "react";
import { useParams } from "react-router-dom";
import { axiosGet } from "../../api/db";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

export default class SinglePage extends Component{
    state = {
        page: [],
        objID: [],
    }
    
    componentDidMount(){
        this.loadData();
    }

     loadData() {
        //const  {getID} = this.state.objID;
        let findID = 10006546;
        
        try{
            axiosGet(`/airbnb/${findID}`,{
                        params:{},
                        responseType: 'json'
                    }).then(response =>{
                        const page = response.data;
                        //console.log(page)
                        this.setState({page})
                    }).catch(
                        error => console.error(`Error: ${error}`)
                    )
        } catch (error){

        }
        
    }
    

    render(){
        //const amenitiesArray = JSON.parse(this.state.page.amenities)
        try{
            return(
            <article class="d-flex align-content-center">
                <div id="page" class="">
                    {this.state.page.map((item) =>
                        <div>
                            <h1>{item.name}</h1>
                            <img src={item.images.picture_url}></img>
                            <p>{item.space}</p>
                            <p> {item.description}</p>
                            <p>{item.neighborhood_overview}</p>
                            <p>Available Amenities at this location</p>
                            <ul> 
                                <div> 
                                {item.amenities.map(function(type){
                                    return (
                                        <li>{type}</li>
                                    )
                                })}</div>
                            </ul>
                        </div>)}
                </div>
                </article>
            )
        } catch (error){
            return(
                <div>Error: {error}</div>
            )
        }
        
        
    }
}
/*
const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SinglePage)*/
