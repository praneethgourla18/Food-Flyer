import { IMG_URL } from "../utils/constant"

const ResCard =(props)=>{

    const {resObj}=props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resObj?.info;
 return(
    <div id="card">  
       
        <img className="fooditem" src={IMG_URL+cloudinaryImageId}/>
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p>Rating : {avgRating}</p>
        <p>Cost for Two : {costForTwo}</p>  
        
    </div>
)
}
export default ResCard;