import React,{useState} from 'react';
import {findByCategory} from "../components/api";

import{useEffect} from "react";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import {useHistory,useLocation} from "react-router-dom";
import Loader from "../components/Loader";

function Home(props) {
    const [category,setCategory] = useState([])
    const [filterCategory,setFilterCategory] = useState([])
    const {pathname,search} = useLocation()
    const{push}=useHistory()
    const handleSearch =(str)=>{
        setFilterCategory(category.filter(item=>item.strCategory.toLowerCase().includes(str.toLowerCase())))
        push({
            pathname,
            search:`?s=${str}`
        })
    }
    useEffect(()=>{
        findByCategory().then(data=>{
            setCategory(data.categories)
            setFilterCategory(search? data.categories.filter(item=>
            item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
        ):data.categories
            )
        })
    },[search])
    return (
        <>
            <Search cb={handleSearch}/>
            {!category.length?(
                <Loader/>
            ):(
                <CategoryList categories={filterCategory}/>
            )}

        </>
    );
}

export default Home;