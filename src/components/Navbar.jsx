import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import "./style.css"


const Navbar = () => {
  return (
    <div>
        <div className='navbar flex flex-wrap justify-between items-center py-8 px-[10%] bg-orange-900'>
            <div className='md:w-[30%] lg:w-[50%] w-[30%] mb-1'>
                <Link to={'/'}>
                <img src="https://www.themealdb.com/images/logo-small.png" />
                </Link>
            </div>

            <div className='flex text-white'>
            <NavLink to={'/'} className="px-2 py-1 mx-3 nav">Home</NavLink>
            <NavLink to={'/product'} className="px-2 py-1 mx-3 nav">Recipe</NavLink>
            <NavLink to={'/contact'} className="px-2 py-1 mx-3 nav">Contact Us</NavLink>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar