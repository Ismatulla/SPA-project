import React from 'react';
import MealItems from "./MealItems";
import {useHistory} from "react-router-dom";

function MealList({meals}) {
    const {goBack} =useHistory()
    return (
        <div className='list'>
            <button className="btn backBtn" onClick={goBack}>categories</button>
            {meals.map(meal=>(
                <MealItems key={meal.idMeal} {...meal}/>
            ))}
        </div>
    );
}

export default MealList;