
import './App.css';

import Header from './components/Header';
import AboutPage from './components/about';
import RestaurantMenu from './components/RestaurantMenu';
import Body from './components/Body';
import RestoCard from './components/RestoCard';
import Footer from './components/footer';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import { Outlet, Routes } from "react-router"
import ErrorPage from './components/ErrorPage';





const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>

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
    path:'restaurantmenu/:resId',
    element:<RestaurantMenu />
   }
   
   
  ],
   errorElement:<ErrorPage />,
  // errorElement:<Error />
  }
]);

export default appRouter;
// export appRouter;
