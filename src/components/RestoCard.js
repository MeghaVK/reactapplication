
const RestoCard = (props,index) => {
    
  const {restoData}=props;
  if(!restoData || !restoData.info) return null;
  const {name,cuisines,avgRating,deliveryTime}=restoData?.info;

  return (
    <div className='card shdow-sm'>
      <div className='imgDiv justify-content-center d-flex'>
        <img src={restoData.info.cloudinaryImageId} className='card-img-top' alt='food' ></img>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>
          {name}
        </h5>
        <p>{cuisines.join(', ')}</p>
        <p className='badge bg-success card-text mb-1'>{avgRating} </p>
        <p className='card-text'>{deliveryTime}</p>
      </div>
    </div>)
}
export default RestoCard;