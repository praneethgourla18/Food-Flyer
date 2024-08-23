import { IMG_URL } from "../utils/constant"

const ResCard =(props)=>{

    const {resObj}=props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resObj?.info;
 return(
    <div className="w-[240px] rounded-[10px] p-[10px] m-[22px] bg-[#FFF] shadow shadow-[rgba(112, 112, 112, .2)] z-10 hover:scale-[0.98]">  
       
        <img className="w-[100%] h-[180px] object-cover rounded-[10px]" src={IMG_URL+cloudinaryImageId}/>
        <h1 className="text-ellipsis overflow-hidden whitespace-nowrap">{name}</h1>
        <h5 className="font-light text-ellipsis overflow-hidden whitespace-nowrap">{cuisines.join(", ")}</h5>
        <p>Rating : {avgRating}</p>
        <p>Cost for Two : {costForTwo}</p>  
        
    </div>
)
}
export default ResCard;