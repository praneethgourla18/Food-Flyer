import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart"

import RestaurantMenu from "./components/RestaurantMenu";

import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom"


const AppComponent = () => (
    <div>
     <Header/>     
     <Outlet/>
    </div>
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
                     path:"About",
                     element:<About/>,
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
                   path: "/restaurants/:resId",
                   element: <RestaurantMenu />,
                 },
        ]
      }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);