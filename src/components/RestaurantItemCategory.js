const RestaurantItemCategory = (items)=>{
    const citems = items;
    console.log(citems);
    return(
        <div className="container">
            <div className="row">
                {citems?.items?.map((item)=>{
                    console.log(item)
                    return(
                        <div className="itemDiv p-3 m-2">
                            <span>{item?.card?.info?.name}  - ₹ {item?.card?.info?.price/100}</span>
                            
                             <p>{item?.card?.info?.description}</p>

                             <button className="btn border-t-cyan-50 border absolute justify-content-between p-2 shadow">
                                <span className="my-2"> - </span> Add <span className=""> + </span>
                             </button>
                            </div>
                    )
                })}
            </div>
            </div>
    )
}
export default RestaurantItemCategory;