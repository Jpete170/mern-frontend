import React, {Component} from "react";
import  axiosGet  from "../../api/db";
import { connect } from "react-redux"; // potential use for state management
import { URL_Listing } from "./listing";

import { TableOfContents } from "../../components/TableOfContent";
import Spinner from "../../components/Spinner";

export default class SinglePage extends Component{
    state = {
        page: [],
        objID: [],
        loaded: false,
    }

    
    componentDidMount(){
        this.loadData();
        
    }

      loadData() {
        let findID = URL_Listing();
        try{
           axiosGet(`${findID}`,{
                        params:{},
                        responseType: 'json'
                    }).then(response =>{
                        const page = response.data;
                        //console.log(page)
                        this.setState({page})
                        this.setState({loaded: true})
                    }).catch(
                        error => console.error(`Error: ${error}`)
                    )
        } catch (error){
            console.error(error);
        }
        
    }
    
    loadSpinner(){
        return(
            <div class="">
                <Spinner/>
            </div>
        )
    }

    pageContents(){
        let SecurityDepositAmount = 0;
        return(
            <div id="page" class="">
                
                    {this.state.page.map((item) =>
                        <div>
                            <div class="">
                                <div class="">
                                    <h1 class="text-center text-decoration-underline">{item.name}</h1>
                                </div>
                            </div>
                            
                            <div class="">
                                <img src={item.images.picture_url} class="img-thumbnail img-fluid rounded mx-auto d-block"></img>
                            </div>
                            <div class="py-3 d-flex justify-content-end">
                                <div class="w-75">
                                    <TableOfContents />
                                </div>
                            </div>
                            
                            <div class="">
                                <div class="text-decoration-underline" id="Description">
                                   <h3>Description</h3> 
                                </div>
                              
                                <div class="">
                                    <p> {item.description}</p>
                                    <p>{item.neighborhood_overview}</p>
                                </div>
                                <div>
                                    <h5 class="text-decoration-underline">Property Address</h5>
                                    <p>Street: {item.address.street}, </p>
                                    <p>Suburb: {item.address.suburb}, </p>
                                    <p>Government Area: {item.address.government_area}, </p>
                                    <p>Market: {item.address.market}, </p>
                                    <p>Country: {item.address.country}, </p>
                                    <p>Country Code: {item.address.country_code}</p>
                                    
                                </div>
                            </div>
                            <div id="General Information">
                                <div>
                                    <h3>General Information</h3>
                                </div>
                                <div>
                                    <p class="text-decoration-underline">Transport Options</p>
                                    <p>{item.transit}</p>

                                    <p class="text-decoration-underline">How to Access</p>
                                    <p>{item.access}</p>
                                </div>
                            </div>
                            <div id="Property Information">
                                 <h3 class="">Property Information</h3>
                                    <ul>
                                        <li>House Rules: {item.house_rules}</li>
                                        <li>Property Type: {item.property_type}</li>
                                        <li>Room Type: {item.room_type}</li>
                                        <li>Bed Type: {item.bed_type}</li>
                                        <li>Minimum Nights: {item.minimum_nights}</li>
                                        <li>Maximum Nights: {item.maximum_nights}</li>
                                        <li>Property Accommodates: {item.accommodates}</li>
                                        <li>Bedrooms: {item.bedrooms}, Beds: {item.beds}</li>
                                        <li>Bathrooms: {parseFloat(item.bathrooms['$numberDecimal'])}</li>
                                    </ul>
                            </div>

                            <div id="Prices">
                                <div>
                                    <h3>Prices</h3>
                                </div>
                                <div>
                                    <p>The associated prices of the property are displayed below.</p>
                                    <p>It is safe to assume that the prices are in the currency of the country that the AirBnB listing is located in.</p>
                                </div>
                                <div>
                                    <ul>
                                        <li>Property Price: {item.price['$numberDecimal']}</li>
                                        
                                        <li>Security Deposit: {SecurityDepositAmount}</li>
                                        <li>Cleaning Fee: (placeholder)</li>
                                        <li>Extra People:  (placeholder) per extra person</li>
                                        <li>Guests Included: (placeholder)</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="Amenities">
                                <h3>Amenities</h3>
                                <p>Available Amenities at this location</p>
                                <ul> 
                                    <div> 
                                    {item.amenities.map(function(type){
                                        return (
                                            <li>{type}</li>
                                        )
                                    })}</div>
                                </ul> 
                            </div>
                            <div id="Host Information">
                                <div>
                                    <h3>Available Host Information</h3>
                                </div>
                                <div>
                                    <p>Host Name: {item.host.host_name} </p>
                                    <p>Host ID: {item.host.host_id}</p>
                                    <p>Host URL: <a href={item.host.host_url}>{item.host.host_url}</a></p>
                                    <p>Host Location: {item.host.host_location}</p>
                                    <p>About the Host: {item.host.host_about}</p>
                                    <p>Usually responds in {item.host.host_response_time}</p>
                                    <p>Host Neighborhood: {item.host.host_neighborhood}</p>
                                    <p>Host Response Rate: {item.host.host_response_rate}</p>
                                    <p>Host Verifications:</p>
                                    <ul>
                                        {item.host.host_verifications.map((verif)=>
                                        <li>{verif}</li>)}
                                    </ul>
                                    
                                </div>
                            </div>
                            <div id="Reviews">
                                <div>
                                    <h3>Property Reviews</h3>
                                </div>
                                <div>
                                    <h5 class="text-decoration-underline">Review Scores</h5>
                                    <div>
                                        <p>Review Accuracy: {item.review_scores.review_scores_accuracy} / 10</p>
                                        <p>Cleanliness: {item.review_scores.review_scores_cleanliness} / 10</p>
                                        <p>Check In: {item.review_scores.review_scores_checkin} / 10</p>
                                        <p>Communication: {item.review_scores.review_scores_communication} / 10</p>
                                        <p>Location: {item.review_scores.review_scores_location} / 10</p>
                                        <p>Value: {item.review_scores.review_scores_value} / 10</p>
                                        <p>Rating: {item.review_scores.review_scores_rating}%</p>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row row-cols-2">
                                    {item.reviews.map((review)=>
                                        <div class="col border border-black ">
                                            <p>Review ID: {review._id}</p>
                                            <p>Date: {review.date}</p>
                                            <p>Reviewer Name: {review.reviewer_name}</p>
                                            <p>{review.comments}</p>
                                        </div>)}
                                    </div>
                                
                                </div>
                            
                            </div>
                            
                        </div>)}
                </div>
        )
    }
    
    render(){
        
        try{
            return(
            <article class="d-flex align-content-center">
                {(this.state.loaded) ? this.pageContents() : this.loadSpinner()}
            </article>
            )
        } catch (error){
            return(
                <div>Error: {error}</div>
            )
        }
        
        
    }
}
//Skeleton code for potential Redux implementation, when state needs to be managed
/*
const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SinglePage)*/
