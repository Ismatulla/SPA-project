import React from 'react';
import CategoryItem from "./CategoryItem";
function CategoryList({categories=[]}) {
    return (
        <div className='list'>
            {categories.map(el=>(
                <CategoryItem key={el.idCategory} {...el}/>
            ))}
        </div>
    );
}

export default CategoryList;