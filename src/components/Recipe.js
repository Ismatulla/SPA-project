import React,{useEffect,useState} from 'react';
import {findById} from "./api";
import {useParams,useHistory} from "react-router-dom";
import Loader from "./Loader";

function Recipe(props) {
const [recipe,setRecipe] = useState([])
const [data,setData ] = useState(false)
const {goBack} = useHistory()
 const showToggle=()=>{
    setData(!data)
 }
const {id} = useParams()
    useEffect(()=>{
        findById(id).then(data=>setRecipe(data.meals[0]))
        console.log(Object.keys(recipe))
        console.log(recipe)
    },[])
    return (
        <>
            {!recipe.idMeal? <Loader/>:(
                <div className='recipe'>
                    <div className='image'>
                        <img src={recipe.strMealThumb} alt={recipe.strTags}/>
                    </div>
                    {recipe.strYoutube?(
                            <div className="row1">
                                <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen={id}
                                        frameBorder="0" className='youtube' style={{width:300,height:200}}/>
                                      <h6 style={{marginLeft:130}}><b>Watch how it is made</b></h6>
                            </div>
                    ):null}
                    {!recipe.strTags?<b>Instruction</b>: <h4>{recipe.strTags}</h4>}
                    <span className='show' onClick={showToggle}>{data? "Hide Recipe":"show full Recipe"}</span>
                    {data? <p>{recipe.strInstructions}</p>:<p>{recipe.strInstructions.slice(0,60)}...</p>}
                </div>
            )}
            {data? (
                <table className='responsive-table centered highlight'>
                    <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(recipe).map(key=>{
                        if(key.includes('Ingredient') && recipe[key]){
                            return(
                                <tr>
                                    <td>{recipe[key]}</td>
                                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                </tr>
                            )
                        }
                    })}
                    </tbody>
                </table>
            ):null}



            <button className="btn backBtn" onClick={goBack}> back recipe page</button>
        </>
    );
}

export default Recipe;