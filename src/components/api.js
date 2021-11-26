import {API_URL} from "./config";

const findById= async (id)=>{
const response = await  fetch(`${API_URL}lookup.php?i=${id}`)
    return await response.json()
}

const findByCategory = async ()=>{
    const response = await  fetch(`${API_URL}categories.php`)
    return await response.json()
}

const filterByCategory = async (name)=>{
    const response  = await  fetch(`${API_URL}filter.php?c=${name}`)
    return await response.json()
}

export {findById,findByCategory,filterByCategory}

