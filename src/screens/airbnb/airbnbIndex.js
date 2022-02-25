import React, {Component} from "react";
import  axiosGet  from "../../api/db";
import Spinner from "../../components/Spinner";
/* Keep this here
import { connect } from "react-redux";
*/

export default class AirbnbIndex extends Component{
    
    state = {
        docsArray: [],
        singleDoc: [],
        selectedFilterOption: [],
        selectedPageLimit: [],
        loaded: false,
    }
    
    componentDidMount(){
        this.loadIndexData();
        
    }

    async loadIndexData(){
        await axiosGet('/airbnb/index',{
            responseType: 'json',
            params:{
                
            }
        }).then( response=>{
            //console.log(response)
            const docsArray = response.data;
            this.setState({docsArray})
            this.setState({loaded: true})
        }
        ).catch(
            error => console.error(`Error: ${error}`)
        )
    };

    async refreshFilterOptions(){
        let pageLimit = 2 //this.state.selectedPageLimit;
        await axiosGet(`/airbnb/index/filter?results=${pageLimit}`,{
            responseType: 'json',
            params:{
               
            }
        }).then(response=>{
            const docsArray = response.data;
            this.setState({docsArray})
        }).catch(
            error => console.error(`Error: ${error}`)
        )
    }

    onChange_5(){ // Show 5 results
        //this.refreshFilterOptions();
        console.log("This Works.")
    }
     
    render(){
        return(
        <div class="d-flex justify-content-center">
            <div className="">
                <div id='docs' class="">
                    <div class="text-center">
                        <div>
                            <h1>AirBnB Listings</h1>
                        </div>

                    </div>
                    <div class="accordion" id="filter-accordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Filter Options
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="alert alert-primary" role="alert">
                                        The features listed under "Filter Options" are not currently properly implemented, and are only visually implemented.
                                    </div>
                                    <div id="search" class="">
                                        <form class="d-flex">
                                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                
                                            <button type="button" class="btn btn-outline-success" >Search</button>
                                        </form> 
                                    </div>
                                    <br />
                                    <div id="resultAmount" class="d-flex">
                                        <h5>Result Amount:</h5>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="option1" />
                                        <label class="form-check-label" for="option1">
                                            5 Listings
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="option2" />
                                        <label class="form-check-label" for="option2">
                                            10 Listings
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="option3" />
                                        <label class="form-check-label" for="option3">
                                            15 Listings
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    
                    {(this.state.loaded) ? this.state.docsArray.map((item) =>
                    <div class="card" style={{width: '48rem', margin: 10}} key={item._id}>
                        <div class="card-body">
                            <h5 class="card-title text-center">{item.name}</h5>
                            <img src={item.images.picture_url} class="img-thumbnail rounded mx-auto d-block" style={{width: 400}}></img>
                            <p class="card-text">{item.summary}</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href={`/airbnb/${item._id}`} role="button" class="btn btn-primary">View Listing</a>
                            </div>
                            
                        </div>
                    </div>
                    
                    ) : <Spinner/>}
                    
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