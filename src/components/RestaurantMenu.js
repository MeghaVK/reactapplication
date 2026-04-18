import React from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantList } from '../utils/mockData';
const RestaurantMenu = ()=>{
    const {resId}=useParams();
    console.log(resId);
    const restaurant =RestaurantList.find((res)=>res.info.id===resId);
    console.log(restaurant)
    const { name, cuisines, avgRating, costForTwo, deliveryTime,id } = restaurant?.info;
    return(
          <div className="menu">
  <div className="menu-header">
    <h1>{name}</h1>
    <p>{cuisines.join(', ')}</p>
    <p>{costForTwo}</p>
    <p>{deliveryTime}</p>
    <span className="menu-rating">{avgRating} ⭐</span>
  </div>

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
    )
}
export default RestaurantMenu;