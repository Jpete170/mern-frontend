import React, {Component} from "react";
import axiosGet from "../api/db";
import Spinner from "../components/Spinner";

export default class Home extends Component{
    state = {
        loaded: false,
        airbnb_docsArray: []
    }
    componentDidMount(){
        this.loadPreview();
    }

    async loadPreview(){
        await axiosGet('/airbnb/preview',{
            responseType: 'json',
            params:{

            }
        }).then(response=>{
            const airbnb_docsArray = response.data;
            this.setState({airbnb_docsArray})
            this.setState({loaded: true})
        })
    }

    loadSpinner(){
        return(
            <div>
                <Spinner/>
            </div>
        )
    }
    
    airbnb_contentPreview(){
        return(
            <div>
                <div class="container">
                    <div class="row row-cols-md-2">
                        {this.state.airbnb_docsArray.map((item)=>
                        
                                <div class="cols">
                                    <div class="card" style={{margin: 5}} key={item.id} >
                                        <div class="card-body">
                                            <img src={item.images.picture_url} class="img-thumbnail rounded mx-auto d-block" style={{width: 400}}></img>
                                            <h5 class="card-title text-center text-decoration-underline">{item.name}</h5>
                                            <p>Host Country: {item.address.country}</p>
                                            <p>{(item.space) ? item.space : <p>Check out the Listing for More Information</p>}</p>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <a href={`/airbnb/${item._id}`} role="button" class="btn btn-primary">View Listing</a> 
                                            </div>
                                            
                                        </div>
                                    </div>  
                                </div>
                            )}  
                    </div>
                  
                </div>
                
            </div>
        )
    }

    render(){
        return(
        <div>
            <div className="text-center text-decoration-underline">
                <h1>Listings Finder</h1>
            </div>
            <div class="">
                <p>This is the front end portion for my <a href="/">MERN Fullstack project</a>. This is a React project created using the Create React App CLI command, and uses <a href="https://getbootstrap.com">Bootstrap</a> for CSS styling.</p>
                <p>This website currently hosts a selection of AirBnB Listings, sourced from the example dataset from MongoDB.</p>
            </div>
            <div class="alert alert-primary" role="alert">
                <div class="text-decoration-underline" >
                    <h3>Disclaimer</h3>
                </div>
                <div>
                    <p>This project uses the sample data collections provided by <a href="https://www.mongodb.com/" class="">MongoDB</a>, and is not reflective of any actual data used by real world companies.</p>
                </div>
            </div>
    
            <div class="" id="">
                <div class="">
                    <h2 class="" id="">
                        Airbnb Listings
                    </h2>
                    <div id="" class="" >
                        <div class="">
                            <div>
                                <p>Below is a selection of available AirBnB listings to view.</p>
                                <p>Alternatively, click <a href="/airbnb" class="">Here</a> to view a larger selection of airbnb listings.</p>
                            </div>
                            <div>
                                {(this.state.loaded) ? this.airbnb_contentPreview() : this.loadSpinner()}
                            </div>
                        </div>
                    </div>
                </div>
               {/**Add elements here for the Accordion component */}
            </div>
        </div>
        )
    }
}