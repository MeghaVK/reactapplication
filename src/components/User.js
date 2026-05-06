import { useState } from "react";
const User=(props)=>{
    let[count,setCount]=useState(0);

    return(
        <div className="container">
            <div className="row">
                <div className="user-csrd card">
                    <h1>Count : {count}</h1>
                    <button onClick={()=>{setCount(count++)}}>Increase Count</button>
                    <h1>{props.infoobj.componenttype}</h1>
                    <h1>{props.infoobj.name}</h1>
                    <h3>{props.infoobj.location}</h3>
                    <h4>{props.infoobj.email}</h4>
                </div>
            </div>
        </div>
    )
}
export default User;