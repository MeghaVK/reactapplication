import RestoCard from './RestoCard';
import {RestaurantList} from '../utils/mockData';
import React,{useState,useEffect} from 'react';
import Shimmer from './shimmer';
const Body = (props) => {
    // this is one method
    const[listofRestaurant,setlistofRestaurant]=useState(RestaurantList);
    const[searchinput,setsearchinput]=useState('');

  useEffect(()=>{
//     fetch(API_URL).then((res)=>{
// console.log(res)
//     })
fetchData();
    console.log('useEffect called')
  },[]);
  console.log('body rendered');
  const fetchData=async()=>{
    const API_URL ='https://jsonplaceholder.typicode.com/todos/1';
    const data = await fetch(API_URL);
    console.log('api response =',data)

  }
  //  setTimeout(() => {
  //     setlistofRestaurant(RestaurantList);
  //     // setLoading(false);
  //   }, 2000);
    // this is another method
    // const arr = useState(RestaurantList);
    // let listofRestaurant = arr[0];
    //  let setlistofRestaurant = arr[1];

  return listofRestaurant.length===0 ? <Shimmer/>: (
    <section className='body'>
        <div className='container'>
             <div className='d-flex justify-content-end align-items-center gap-3 flex-wrap'>
              <div className='d-flex gap-2'>
                  <input type='text' placeholder='Search Restaurants...' className='me-1' 
                  value={searchinput} onChange={(event)=>{ setsearchinput(event.target.value)}} />
                  <button className='btn btn-primary' onClick={()=>{
console.log(searchinput);
if(searchinput===''){
  setlistofRestaurant(RestaurantList);
  return;
}
else{
const filteredResto = listofRestaurant.filter((resname)=>
  {
    const nameMatch =resname.info.name.toLowerCase().includes(searchinput.toLowerCase());
    const cuisineMatch = resname.info.cuisines.join(' ').toLowerCase().includes(searchinput.toLowerCase())
    return nameMatch || cuisineMatch
  
});
console.log(filteredResto)
setlistofRestaurant(filteredResto)
}
                  }}>Search</button>
                  
                </div>
                
                <div className='d-flex gap-2'>
                <div className='col-lg-12 '>
               <button className='btn btn-primary me-3' onClick={()=>{
                    // const filteredList = listofRestaurant.filter((item)=> item.info.avgRating >= 4.2)
                    setlistofRestaurant(RestaurantList)
                    // console.log(setRestaurantListdata)
            }}>All</button>
            <button className='btn btn-primary' onClick={()=>{
                    const filteredList = listofRestaurant.filter((item)=> item.info.avgRating >= 4.2)
                    setlistofRestaurant(filteredList)
                    // console.log(setRestaurantListdata)
            }}>Top rated Restaurants</button>
           </div>
        </div>
        </div> 
        </div>
    <div className='container'>
       
    
      {listofRestaurant.map((item,index)=>
      // <div className='col-md-3'>
        <div className='cardsDiv px-20 py-20' key={index}>
          {/* <Card restoName="Santosh Dhaba" restoCuisins="Indian Food" restoRating="3" restoTime="20 mits" /> */}
          <RestoCard restoData = {item} index={index} />
         </div>
      // </div>
     )}
    </div>
    </section>
  )
}

export default Body;

