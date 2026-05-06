import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from './useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from "react";
import { useContext } from "react";
import contextData from './UseContext';
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId)
  const resInfo = useRestaurantMenu(resId);
  console.log("resInfo =", resInfo)
  // // if (resInfo === null) return <shimmer />;
  const info = resInfo?.data?.cards?.[0]?.card?.card?.info;
  const regularCards = resInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = regularCards
    ?.filter(c => c?.card?.card?.itemCards)
    ?.map(c => c?.card?.card);

  console.log("categories =",categories);
  const { name, cuisines } = info || {};

  const[openIndex,setOpenIndex]= useState(null);
  const data =  useContext(contextData);
  console.log(data)
  return (
    <div className='container'>
      <div className='row'>
        <div className="text-center p-8">
          <h1>{name}</h1>
          <p>{cuisines}</p>
        </div>
        {categories?.map((category,index)=> <RestaurantCategory  key={index} isOpen={index === openIndex} categoryData={category} 
        setOpenIndex={() =>
      setOpenIndex(index === openIndex ? null : index)
    }/>)}
        {/* <RestaurantCategory /> */}
        <div className="menu">


          <h2>Menu</h2>

          <div className="menu-items">
            <div className="menu-item">
              <div className="item-info">
                <h4>Paneer Butter Masala</h4>
                <p>Rich creamy curry</p>
              </div>
              <div className="item-price">₹250</div>
            </div>

            <div className="menu-item">
              <div className="item-info">
                <h4>Veg Biryani</h4>
                <p>Spiced rice dish</p>
              </div>
              <div className="item-price">₹180</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RestaurantMenu;