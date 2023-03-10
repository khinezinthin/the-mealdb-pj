import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const[search,setSearch] = useState({});
  const navigate = useNavigate()
  const onsubmit = (e)=>{
    e.preventDefault()
    navigate("/search/" + search)
  }

  return (
    <div className="home-bg">
      <div className="h-[100vh] flex justify-center items-center ">
        <h1 className="text-[50px] font-extrabold text-center absolute top-[40%]">
          Find a Recipe
        </h1>
        <form onSubmit={onsubmit}>
        <div className="box w-[300px] md:w-[500px]">
            <BiSearch className="search-icon" />
            <input onChange={(e)=> setSearch(e.target.value)} type="text"className="search-input" placeholder="search by name"/>
        </div>
        </form>
      </div>

      
    </div>

  );
};

export default Home;
