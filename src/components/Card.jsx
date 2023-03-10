import React from "react";
import { Link } from "react-router-dom";
import {BsSearchHeartFill} from "react-icons/bs"


const Card = ({product}) => {
  const {strMeal,strMealThumb} = product;
  return (
    // <div>
      <div className="card">
        <div className="card-body relative">
          <Link to={`/detail/${product.idMeal}`}>
          <img src={strMealThumb} className="w-[400px] card-img" /> 
          <p className="img-name absolute bottom-0">{strMeal} <BsSearchHeartFill className="inline-block card-icon"/></p>
          </Link>
        </div>
      </div>
    // </div>
  );
};

export default Card;
