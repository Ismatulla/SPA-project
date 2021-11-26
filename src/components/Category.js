import React,{useEffect,useState} from 'react';
import{useParams} from "react-router-dom";
import Loader from "./Loader";
import MealList from "./MealList";
import {filterByCategory} from "./api";
function Category(props) {
    const [meals,setMeals] = useState([])
    const{name} = useParams()
    useEffect(()=>{
        filterByCategory(name).then(data=>setMeals(data.meals))
    },[name])
    return (
        <div>
            {!meals.length? <Loader/> : <MealList meals={meals}/>}
        </div>
    );
}

export default Category;