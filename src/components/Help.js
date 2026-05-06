import { useEffect,useContext } from "react";
import contextData from "./UseContext";
const Help = ()=>{
        const data =  useContext(contextData);
  console.log(data)
    useEffect(()=>{
     const timer=  setInterval(()=>{
console.log('help useEffect is called');


        },1000);
    

return ()=>{
 console.log('in return statement');
 clearInterval(timer);
}
    },[])
}
export default Help