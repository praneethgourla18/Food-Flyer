import {useState ,useEffect} from "react"
const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo]=useState(null);

   useEffect(()=>{
     fetchMenu();
   },[resId])
  
    const fetchMenu = async () => {
     
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&completemenu=true&lat=17.4875418&lng=78.3953462&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await response.json();
        setResInfo(json.data);
  }
  
  return resInfo;
}
export default useRestaurantMenu;