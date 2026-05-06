
import { Link } from "react-router-dom";
import { CDN_URL, } from "../utils/constants";
const RestoCard = (props) => {
  const restoData=props?.resData;
  if(!restoData ) return null;
  const {name,cuisines,avgRating,deliveryTime,resId}=restoData?.info;

  return (
    
    <div className='card shdow-sm'>
      <div className='imgDiv justify-content-center d-flex'>
        <img src={CDN_URL + restoData.info.cloudinaryImageId} className='card-img-top' alt='food' ></img>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>
          {name}
        </h5>
        <p>{cuisines.join(', ')}</p>
        <p className='badge bg-success card-text mb-1'>{avgRating} </p>
        <p className='card-text'>{deliveryTime}</p>
      </div>
    </div>
    )
}


export const VegResto =()=>{
  return(props)=>{
    return(
      <div className="position-relative">
  <div className="veg-badge">
    Veg
  </div>

  <RestoCard {...props} />
</div>
    )
  }
}
export default RestoCard;