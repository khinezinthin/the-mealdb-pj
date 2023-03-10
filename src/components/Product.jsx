import React, { useEffect, useState } from 'react'
import Card from './Card'

const Product = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        const {meals} = await api.json();
        setProducts(meals);
        console.log(meals);
    }
  return (
    <div className='flex flex-wrap justify-center gap-10 py-10 bg-orange-50'>
        {products.map(product =>{
            return(
                <Card key={product.idMeal} product={product}/>
            )
        })}
    </div>
  )
}

export default Product