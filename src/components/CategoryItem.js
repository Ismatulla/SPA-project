import React, {useState} from 'react';
import {Link} from "react-router-dom";

function CategoryItem(props) {
    const {strCategory,strCategoryThumb,strCategoryDescription} = props
    const [category,setCategory] = useState(true)
    const toggle=()=>{
        setCategory(!category)
    }
    return (

                <div className="card">
                    <div className="card-image">
                        <img src={strCategoryThumb} alt={strCategory}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title"> <b>{strCategory}</b></span>
                        {category? <p>{strCategoryDescription.slice(0,60)}...</p>:<p>{strCategoryDescription}</p>}

                       <span onClick={toggle}><b className='show'>{category? 'Show more': 'show less'}</b></span>
                    </div>
                    <div className="card-action">
                       <Link to={`/category/${strCategory}`} className='btn' >
                             Watch categories
                       </Link>
                    </div>
                </div>
    );
}

export default CategoryItem;