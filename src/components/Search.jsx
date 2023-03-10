import React, { useEffect, useState } from 'react'
import { useParams, Link  } from 'react-router-dom'
import {BsSearchHeartFill} from "react-icons/bs"


const Search = () => {
    const{name} = useParams()
    const [search,setSearch] = useState([])
    useEffect(()=>{
      fetchData()
    },[])
    const fetchData = async()=>{
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      const {meals} = await api.json()
      setSearch(meals)
      console.log(meals);
    }
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-10 py-10 bg-orange-50'>
        {search.map(item=>{
          return(
            <div className="card">
            <div className="card-body relative">
              <Link to={`/detail/${item.idMeal}`}>
              <img src={item.strMealThumb} className="w-[400px] card-img" /> 
              <p className="img-name absolute bottom-0">{item.strMeal} <BsSearchHeartFill className="inline-block card-icon"/></p>
              </Link>
            </div>
          </div>
          )
        })}
      </div>
      <div className='text-center mb-5'>
      <Link to={'/'}>
        <button className='bg-black px-5 py-1 text-white'>Search Again</button>
      </Link>
      </div>
    </div>
  )
}

export default Search