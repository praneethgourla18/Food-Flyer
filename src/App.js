import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Login from "./components/Login"
import Logout from "./components/Logout"


import Error from "./components/Error";
import Cart from "./components/Cart"
import RestaurantMenu from "./components/RestaurantMenu"
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom"

import {Provider} from "react-redux";
import appStore from "./utils/appStore";


const Grocery = lazy(() => import("./components/Grocery"));

const AppComponent = () => (
   <Provider store={appStore} >
         <div>
         <Header/>     
         <Outlet/>
    
        </div>
  </Provider>
);

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppComponent/> ,
        errorElement : <Error />,
        children : [
                {
                     path:"/",
                     element:<Body/>,
                 },
                 {
                     path:"Contact",
                    element:<Contact/>,
                 },
                 {
                     path:"Cart",
                    element:<Cart />,
                 },

                {
                     path:"Login",
                    element:<Login/>,
                 },
            {
                 path:"Logout",
                element:<Logout/>,
             },
                
                 {
                 path:"Grocery",
                element:(
                      <Suspense fallback= 
                {<div>Loading Grocery...</div>}>
                        <Grocery />
                      </Suspense>
                    ),
                },
                 {
                   path: "/restaurants/:resId",
                   element: <RestaurantMenu />,
                 },
        ]
      }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
