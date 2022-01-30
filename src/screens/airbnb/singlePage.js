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
        let findID = "1003530";
        try{
            axiosGet(`/airbnb/${findID}`,{
                        params:{
                            
                        },
                        responseType: 'json'
                    }).then(response =>{
                        const page = response.data;
                        console.log(page)
                        this.setState({page})
                    }).catch(
                        error => console.error(`Error: ${error}`)
                    )
        } catch (error){

        }
        
    }

    render(){
        try{
            return(
            <article>
                <div id="page" class="container">
                    {this.state.page.map((item) =>
                        <div>
                            <p>Item Name: {item.name}</p>
                            <p>Item Description: {item.description}</p>
                            <p>ObjectID:</p>
                            <button>Go back</button>
                        </div>)}
                </div>
                </article>
            )
        } catch (error){
            return(
                <div>Error</div>
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
