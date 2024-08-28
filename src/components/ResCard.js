import { IMG_URL } from "../utils/constant"
import rating_icon from "../utils/icons8-rating-50.png"
const ResCard =(props)=>{

    const {resObj}=props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla,locality,areaName}=resObj?.info;
    const{deliveryTime}=sla;
 return(
    <div className="w-[300px] md:w-[240px] rounded-[10px] p-[10px] m-[18px] bg-[#FFF] shadow-lg border border-gray-200 transition-transform duration-200 ease-in-out z-10 hover:scale-[0.98]">  
       
        <img className="w-[100%] h-[180px] object-cover rounded-[10px]" src={IMG_URL+cloudinaryImageId}/>
        <h1 className=" mt-[3px] font-semibold text-ellipsis overflow-hidden  whitespace-nowrap ">{name}</h1>
        <h5 className="font-light text-sm text-ellipsis overflow-hidden whitespace-nowrap ">{cuisines.join(", ")}</h5>
        
        <h5 className="font-medium text-sm text-[#252525]">{locality} </h5>
        
        
        <div className="mt-[4px] font-normal flex gap-[7px]">
           <div className="flex gap-[2px]">
           <img width="25" height="15" src=    {rating_icon} alt="rating"/>
           <h4> {avgRating}</h4></div>
            <h4 className="mx-[3px]">•</h4>
            <h4>{deliveryTime} mins</h4>
            
               
        </div>  
        
    </div>
)
}
export default ResCard;