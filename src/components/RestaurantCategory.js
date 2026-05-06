import RestaurantItemCategory from "./RestaurantItemCategory";
// import { useState } from "react";

const RestaurantCategory = ({ categoryData,index,isOpen ,setOpenIndex}) => {
    const cData = categoryData;
    console.log("categoryData =", cData);
    
    return (
        <div className="container">
            <div className="row">
                <div className="categoryTitle  p-3 m-3 shadow w-100  ">
                    <div style={{ cursor: "pointercc" }} className="d-flex align-items-center justify-content-between cursor-pointer" 
                    onClick={setOpenIndex}>
                        <h3>{ categoryData.title} ({categoryData?.itemCards?.length})</h3>
                        <span style={{ color: "black" }}>{isOpen ? "🔼" : "🔽"}</span>
                    </div>
                    {isOpen &&
                    <div className="accordion-body">
                        <RestaurantItemCategory   items={categoryData?.itemCards} />

                    </div>
}


                </div>
            </div>
            {/* {cData.map((c) => {
                return (
                    <div className="categoryDiv">
                        <span>{c.title}</span>
                    </div>
                )
            }) */}
            {/* } */}


        </div>
    )

}
export default RestaurantCategory;