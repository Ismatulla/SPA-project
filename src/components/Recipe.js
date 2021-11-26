import React,{useEffect,useState} from 'react';
import {findById} from "./api";
function Meals(props) {

    useEffect(()=>{
        findById(id).then()
    })
    return (
        <div>
        </div>
    );
}

export default Meals;