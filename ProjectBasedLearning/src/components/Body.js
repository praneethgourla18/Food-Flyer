import ResCard from "./ResCard";

import restaurants from "../../utils/mockData";

const Body=()=>(
    <div id="body">
    
   
    <div id="allcontent">
        {/* /* <ResCard resObj={restaurants[0]}/> */} 

        {/* //dynamically using map method to render array of restaurant objects
        // key prop is required for react to track the items in the list
        // in this case, we are using restaurant id as key
        // this is a best practice to make sure react can identify and update the correct component when the data changes
        // without the key prop, react might render a new component instead of updating the existing one
        // which can lead to performance issues and bugs */}
    
       {
        restaurants.map(i=>(
            <ResCard key={i.info.id} resObj={i}/>
        )
       )
       }

        {/* //statically */}

         {/* <ResCard resName="GrameenKulf3" cuisine="Ice Cream" url="https://media-assets.swiggy.com/swigg15/ima4e/upload/fl_lossy,f_auto,q_auto,w_660/dkcduodu7fuqn5lqn8f2"/15 */}
         </div>
    </div>
    
)

export default Body;