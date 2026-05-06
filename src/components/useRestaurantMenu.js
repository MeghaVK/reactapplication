import {useParams} from "react-router-dom";
import shimmer from "./shimmer";
import { useState } from "react";
import { useEffect } from "react";
import {RES_MENU_API_URL} from '../utils/constants';
import {mockmenu} from '../utils/mockrestomenu';
const useRestaurantMenu = (resId) => {
    console.log("useRestaurantMenu resId =",resId)
const[resInfo,setResInfo]=useState(null);

 useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
           console.log(" in fetch menu ");
        try{
             console.log(" in try block");
        const data = await fetch(RES_MENU_API_URL + resId);
        const response = await data.json();
        console.log(" response =",response);
        if(response){
        setResInfo(response);

        }
        else{
              console.log(" response =",response);
           setResInfo(mockmenu); 
        }
        }
        catch(error){
              console.log(" error =",error);
            setResInfo(mockmenu);
        }
    };
    return resInfo;
};

export default useRestaurantMenu;
