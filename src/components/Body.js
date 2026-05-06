import RestoCard from './RestoCard';
import { RestaurantList ,carouseldata} from '../utils/mockData';
import React, { useState, useEffect,useContext } from 'react';
import Shimmer from './shimmer';
import { VegResto } from './RestoCard';
// import { API_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import contextData from "./UseContext";
import { useCallback } from "react";
const Body = (props) => {
  // this is one method
  const [listofRestaurant, setListOfRestaurants] = useState([]);
  const [searchinput, setsearchinput] = useState('');
      const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const[foodcarousel]=useState(carouseldata);
  const[username,setusername]=useState('');
  //  const [offerCarousel] = useState([]);

  // console.log('body rendered');
  const {loggedinUser,setloggedinusername} = useContext(contextData);
  console.log(loggedinUser);
  console.log(setloggedinusername);
const fetchData = useCallback(async () => {
  const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163";

  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const cards = data?.data?.cards || [];

    const restaurantCard = cards.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurantListData =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurantListData);
    setFilteredRestaurant(restaurantListData);
    setusername("Swagat");

  } catch (err) {
    console.error(err);
  }
}, []);
  useEffect(() => {
    fetchData();
    console.log('useEffect called')
  }, [fetchData]);
const VegRestaurantCard = VegResto(RestoCard);
  const handleScroll=(direction,containerName)=>{
  // const container = document.getElementById('offer-carousel');
  //  if (!container) return;
  // const scrollvalue = container.clientWidth / 3; // scroll 1 card;
  // if(direction==='left'){
  //   container.scrollLeft-=scrollvalue;
  // }
  // else if(direction==='right'){
  //   container.scrollLeft+=scrollvalue;
  // }

  const container =
  containerName === "offer-carousel-container"
    ? document.getElementById("offer-carousel")   // ✅ FIX
    : document.getElementById("food-carousel-container");
        const scrollAmount =
            containerName === "offer-carousel-container" ? 350 : 280;

        if (direction === "left") {
            container.scrollLeft -= scrollAmount;
        } else if (direction === "right") {
            container.scrollLeft += scrollAmount;
        }

  
 }
//  setusername('')
  //  setTimeout(() => {
  //     setlistofRestaurant(RestaurantList);
  //     // setLoading(false);
  //   }, 2000);
  // this is another method
  // const arr = useState(RestaurantList);
  // let listofRestaurant = arr[0];
  //  let setlistofRestaurant = arr[1];

  return listofRestaurant.length === 0 ? <Shimmer /> : (
    <section className='body'>
      <div className='container-fluid'>
        <div className='d-flex justify-content-end align-items-center gap-3 flex-wrap'>
          <div className='arrows '>
            
            {/* <button className='btn btn-warning' onClick={()=>{
            console.log('left');
              handleScroll('left')
            }}>Prev</button> <button onClick={()=>{
              console.log('right');
              handleScroll('right')
            }} className='btn btn-warning'>Next</button>  */}
            
           <button className='btn btn-warning' onClick={() =>  handleScroll("left", "offer-carousel-container")}>Prev</button>
            <button className='btn btn-warning' onClick={() =>  handleScroll("right", "offer-carousel-container")}>Next</button>
            
          </div>
        </div>
      </div>

      <div className='container'>
        
        {/* <div className='row'>
          <h2 px-2 mx-5>{`${username}, Whats on your mind`} </h2>
        </div> */}
        <div className='row'>
           <h2 >{`${username}, Whats on your mind`} </h2>
          <div className='col-lg-12'>
       
        <div className='offer-carousel' id="offer-carousel">
   
{foodcarousel.map((fooditem)=>( <div className='card ' id="offer-carousel-item" key={fooditem.id}>
    <img src={fooditem.img}  alt={`food-${fooditem.id}`}/>
     </div>)
)}
   
        
        </div>
        </div>
         </div>
      </div>
      <div className='container'>
        <div className='d-flex justify-content-end align-items-center gap-3 flex-wrap'>
          <div className='d-flex gap-2'>
            <input type="text" className='me-1' value={loggedinUser} onChange={(event)=>{
              setloggedinusername(event.target.value) 
            }} />
            <input type='text' placeholder='Search Restaurants...' className='me-1'
              value={searchinput} onChange={(event) => { setsearchinput(event.target.value) }} />
            <button className='btn btn-primary' onClick={() => {
              console.log(searchinput);
              if (searchinput === '') {
                setListOfRestaurants(RestaurantList);
                return;
              }
              else {
                const filteredResto = listofRestaurant.filter((resname) => {
                  const nameMatch = resname.info.name.toLowerCase().includes(searchinput.toLowerCase());
                  // const cuisineMatch = resname.info.cuisines.join(' ').toLowerCase().includes(searchinput.toLowerCase())
                  const cuisineMatch = resname.info.cuisines.some((desc) => desc.toLowerCase().includes(searchinput.toLowerCase()))
                  return nameMatch || cuisineMatch

                });
                console.log(filteredResto)
                // setlistofRestaurant(filteredResto)
              }
            }}>Search</button>

          </div>

          <div className='d-flex gap-2'>
            <div className='col-lg-12 '>
              <button className='btn btn-primary me-3' onClick={() => {
                // const filteredList = listofRestaurant.filter((item)=> item.info.avgRating >= 4.2)
                setFilteredRestaurant(filteredRestaurant)
                // console.log(setRestaurantListdata)
              }}>All</button>
              <button className='btn btn-primary' onClick={() => {
                const filteredList = filteredRestaurant.filter((item) => item.info.avgRating >= 4.5)
                console.log(filteredList)
                setFilteredRestaurant(filteredList);
               
              }}>Top rated Restaurants</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>


        {filteredRestaurant.map((restaurant) =>

          <Link key={restaurant.info.id}
          to={`/restaurants/${restaurant.info.id}`}
          >
             <div className='cardsDiv '>
              {restaurant.info.veg ? (<VegRestaurantCard resData={restaurant}/>)
                                : (<RestoCard resData={restaurant}/>)}
             </div>
          </Link>


         
          // </div>
        )}
      </div>
    </section>
  )
}

export default Body;

