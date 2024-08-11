
import { useState,useEffect } from "react"

const Menu = () => {
  
   const [restmenu ,setRestMenu] = useState([]);
   
    const fetchRestaurants = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=355750&catalog_qa=undefined&submitAction=ENTER');
        const data = await response.json();
       setRestMenu(data);
      };
    
    useEffect(() => {

        fetchRestaurants();

      }, []);



  return (
    <div>Menu</div>
  )
}

export default Menu