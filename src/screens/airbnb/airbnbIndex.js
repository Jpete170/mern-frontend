import React, {Component} from "react";
import { axiosGet } from "../../api/db";
/* Keep this here
import { connect } from "react-redux";
*/

export default class AirbnbIndex extends Component{
    
    state = {
        docsArray: [],
        singleDoc: [],
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
        }
        ).catch(
            error => console.error(`Error: ${error}`)
        )
    };

     
    render(){
        return(
            <div>
            <div className="d-flex align-content-center text-center">
                <div id='docs' class="">
                    <p>The Index page for the AirBnB API Route</p>
                    {this.state.docsArray.map((item) =>
                    <div class="card" style={{width: '48rem', margin: 10}} key={item._id}>
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">{item.summary}</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href={`/airbnb/${item._id}`} role="button" class="btn btn-primary">Go to Page</a>
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