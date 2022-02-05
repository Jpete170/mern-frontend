import React, {Component} from 'react'
import SinglePage from './singlePage'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

let URL_ID;

export function Listing(){
    let location = useLocation()
    //console.log(location.pathname)
    URL_ID = location.pathname;
    return(
        <div>
            <SinglePage/>
        </div>
    )
}

export const URL_Listing = () =>{
    return URL_ID;
}