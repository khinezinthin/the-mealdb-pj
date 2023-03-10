import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {BsYoutube} from 'react-icons/Bs'
import {BsBasket3Fill} from 'react-icons/Bs'

const Detail = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setRecipe(meals[0]);   
    console.log(meals[0]);
  };

  const [ingre,setIngre] = useState([])
  useEffect(()=>{
    const ingredient = [
      {id:1, name:recipe.strIngredient1, measure:recipe.strMeasure1},
      {id:2, name:recipe.strIngredient2, measure:recipe.strMeasure2},
      {id:3, name:recipe.strIngredient3, measure:recipe.strMeasure3},
      {id:4, name:recipe.strIngredient4, measure:recipe.strMeasure4},
      {id:5, name:recipe.strIngredient5, measure:recipe.strMeasure5},
      {id:6, name:recipe.strIngredient6, measure:recipe.strMeasure6},
      {id:7, name:recipe.strIngredient7, measure:recipe.strMeasure7},
      {id:8, name:recipe.strIngredient8, measure:recipe.strMeasure8},
      {id:9, name:recipe.strIngredient9, measure:recipe.strMeasure9},
      {id:10, name:recipe.strIngredient10, measure:recipe.strMeasure10},
    ]
    setIngre(ingredient)
    console.log(ingredient);
  },[recipe])

  
  // const[btnState, setBtnState] = useState(true);
  // const[btnState2, setBtnState2] = useState(false);
  // function handleClick(){
  //   setBtnState(!btnState)
  //   setBtnState2(!btnState2)
  // }

  const[btnState, setBtnState] = useState(true);
  const[btnState2, setBtnState2] = useState(false);
  const showIngre = btnState2? ingre : [] ;
  
  let toggleClassCheck = btnState ? 'focus' : null;
  let toggleClassCheck2 = btnState2 ? 'focus' : null; 

  return (
    <div className="detail-bg">
      <div className="recipe-card py-10 flex m-auto lg:w-[50%] md:w-[60%] w-[90%]">
        <div className="recipe-card-body">
            <div className="border-b-2 border-black">
            <img src={recipe.strMealThumb} className={"w-full h-[400px]"}/>
            </div>

            <div className="p-5 recipe-card-bg">
              <h2 className="text-2xl font-bold tracking-wide capitalize text-green-700">{recipe.strMeal}</h2>
              <p className="text-red-500 mb-3">{recipe.strArea}</p>

              <div className="flex justify-between items-center mb-3">
                <div>
                <button onClick={()=> setBtnState(!btnState)} className={`detail-btn mr-3 ${toggleClassCheck}`}>Instructions</button>
                <button onClick={() => setBtnState2(!btnState2)} className={`detail-btn mr-3 ${toggleClassCheck2}`}>Ingredient</button>
                </div>
                
                <button className="detail-yt-btn border-green-500 bg-green-500 text-white">
                    <Link to={recipe.strYoutube}><BsYoutube className="text-lg "/></Link>
                </button>
              </div>
              
              <p className="leading-8 text-green-600 mb-5 w-full">{btnState? `${recipe.strInstructions}`: ""}</p>
              <hr className="border border-green-500" />

            <div>
              {/* <p>{btnState2? "hello" : ""}</p> */}
              
              <div>
              <div className="flex justify-center items-center my-5">
                <h2 className="text-3xl text-orange-500">{btnState2? "Ingredient" : ""}</h2><BsBasket3Fill className="text-orange-500 ml-3"/>
                </div>

                <div>
                  {showIngre.map(item=>{
                    if(item.name!= ""){
                      return(
                        <div key={item.id}>
                          <table className=" w-full text-center bg-orange-300 rounded-2xl hover:bg-orange-500 ">
                          <tbody>
                          <tr className="my-10 mx-10">
                            <td className="border-r border-orange-900 w-[50%] py-2">{item.name}</td>
                            <td>{item.measure}</td>
                          </tr>
                          </tbody>
                        </table>
                        </div>
                      )
                    }
                  })}
                </div>
                
              </div>

            </div>
              
            </div>

        </div>
      </div>
    </div>
  );
};

export default Detail;
