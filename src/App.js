
import './App.css';

import Header from './components/Header';
import AboutPage from './components/about';
import RestaurantMenu from './components/RestaurantMenu';
import Body from './components/Body';
import Footer from './components/footer';
import { createBrowserRouter } from 'react-router-dom';
import { useState } from "react";
import contextData from './components/UseContext';

import { Outlet } from "react-router"
import ErrorPage from './components/ErrorPage';
import Help from './components/Help'
import { lazy, Suspense, useContext, useEffect } from 'react';
const LazyLoadPage = lazy(()=>import('./components/LazyLoadPage'));

 
const AppLayout = () => {
  const [loggedinusername,setloggedinusername]=useState();
  const [profilepicture,setprofilepicture]=useState();
  useEffect(()=>{
   

    //  console.log(loggedinusername);
     
    // console.log(profilepic);
  const data ={
    name:'Megha K'
  };
  setloggedinusername(data.name);
  githubdata();
 },[]);
  const githubdata =async()=>{
      const githubuserdata = await fetch('https://api.github.com/users/meghak');
    const gihubuserinfo = await githubuserdata.json();
    console.log(gihubuserinfo);
    setloggedinusername(gihubuserinfo.login);
    setprofilepicture(gihubuserinfo.avatar_url);
    };
 console.log(loggedinusername)
  const data =  useContext(contextData);
  console.log(data)
  return (
    <contextData.Provider value={{loggedinUser:loggedinusername, setloggedinusername, profilepic:profilepicture,setprofilepicture}}>
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </contextData.Provider>

  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
   
  children:[
   {
     index:true,
    element:<Body />
   },
   {
    path:'about',
    element: <AboutPage />
   },
   {
    path:'services',
    element: <AboutPage />
   },
   {
    path:'restaurants/:resId',
    element:<RestaurantMenu />
   },
   {
    path:'help',
    element:<Help />
   },{
    path:'lazyload',
    element:<Suspense fallback={<h1>Loading...</h1>}><LazyLoadPage /></Suspense>
   }
   
   
  ],
   errorElement:<ErrorPage />,
  // errorElement:<Error />
  }
]);

export default appRouter;
// export appRouter;
