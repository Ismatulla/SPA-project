import React from 'react';
import {Link} from "react-router-dom";

function MealItems(props) {
    const {strMealThumb,strMeal,idMeal} = props
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>

            <div className="card-content">
                <span className="card-title"> <b>{strMeal}</b></span>
            </div>

            <div className="card-action">
              <Link to={`/meals/${idMeal}`} className='btn'>watch recipe</Link>
            </div>
        </div>
    );
}

export default MealItems;