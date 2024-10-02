import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const [coupon,setCoupon]=useState(false);
  const [couponVal,setCouponVal]=useState("");
  
  const [total,setTotal]=useState(0);
  
  const[clicked,setclicked]=useState(false);
  const changeTotal =()=>{

    if(couponVal=="HireMe"){
      
      setclicked(true);
      setTotal(0);
      
    }
    else{
      setclicked(false);
    } 
  }

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(()=>{
    let newTotal = 0;
    cartItems.forEach((item, index) => {
      const { price, defaultPrice } = item?.card?.card?.itemCards[index]?.card?.info || {};
      newTotal += price ? price/100 : defaultPrice/100;
    })
     if (clicked && couponVal === "HireMe") {
            setTotal(0); // Setting total to 0 for "HireMe" coupon
     } else {
      setTotal(newTotal);
    }
  
  },[cartItems])

  if (cartItems.length === 0) {
    return (
      <div className="mt-[180px] flex flex-col items-center justify-center px-4">
        <h1 className="mt-[30px] sm:mt-[40px] text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-700">
          Oh no! Your cart is empty...
        </h1>
        <p className="text-center text-gray-500 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl">
          Looks like you haven't added anything yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-[130px] mb-[40px]">
    <div className="flex flex-col items-center md:items-start md:flex-row md:gap-10 md:justify-center">
       <div className="w-11/12 md:w-5/12 p-5  border-2 border-gray-200 rounded-lg">
        <div className=" mb-6 flex justify-between p-2 ">
          <h1 className="text-xl p-2 md:text-2xl font-bold text-center text-gray-800">
            Cart
          </h1>
          <button
            className=" bg-white text-white md:p-2 rounded-lg "
            onClick={handleClearCart}
          >
            <img
              width="30"
              height="30"
              className=" md:hover:scale-125 md:transition-transform md:duration-200"
              src="https://img.icons8.com/ios-glyphs/30/filled-trash.png"
              alt="filled-trash"
            />
          </button>
        </div>
        {cartItems.map((item, index) => {
          const { name, price, imageId, defaultPrice,id } =
            item?.card?.card?.itemCards[index]?.card?.info;

          
        
          return (
            <div key={id}>
              <div
                
                className={
                  index == cartItems.length - 1
                    ? " py-2 flex justify-between "
                    : "border-b border-gray-200 py-2 flex justify-between"
                }
              >
                <div>
                  <h2 className="font-semibold">{name}</h2>
                  <p className="text-gray-600">
                    ₹{price ? price / 100 : defaultPrice / 100}
                    
                   
                  </p>
                </div>
                <div className="relative">
                  {imageId == null ? (
                    <button className="p-2 w-[50px] rounded-[5px] bg-yellow-300">
                      Image not avalible
                    </button>
                  ) : (
                    <div>
                      <img
                        className="w-[100px] h-[100px] object-cover rounded-[10px]"
                        src={IMG_URL + imageId}
                      />
                    </div>
                  )}
                </div>
              </div>

              
            </div>
          );
        })}

               </div>
      <div className="w-11/12 mt-5 md:mt-0 md:w-3/12 h-full border-2 border-gray-200 rounded-lg p-2 ">
        <h1 className="text-lg font-semibold text-gray-700 px-4 mb-2 border-b border-gray-200">Bill Details</h1>
        <div className="flex justify-between text-md text-gray-800 mb-2 px-4">
          <h1 className="font-semibold">Value</h1>
          <h1>{total.toFixed(2)} ₹</h1>
        </div>
        <div className="flex justify-between px-4 mb-2 text-md text-gray-800">
          <h1 className="font-semibold">Delivery fee</h1>
          <h1>{(total!=0)?"60":"0"} ₹</h1>
        </div>
        <div className="px-4 font-xl text-md font-semibold text-gray-700 mb-2">
          <button onClick={()=>setCoupon(!coupon)} className={clicked?" font-xl text-md font-semibold text-green-500 mb-2":"font-xl text-md font-semibold text-gray-700 mb-2"}>{clicked?"Applied succesfully!":"Apply coupon?"}</button>
          {coupon && <div className="m-2 flex gap-2">
            
             <input type="text" placeholder="Apply HireMe to get 100% off" className="rounded-lg  p-2 border focus:border-gray-200"  onChange={(e)=>setCouponVal(e.target .value)} value={couponVal} clear/>
            
             <button className="p-2 bg-yellow-300 rounded-lg hover:bg-green-400 transition duration-200" onClick={changeTotal}>{clicked?"Applied":"Apply"}</button>
          </div>}
        </div>
        <div className="flex justify-between px-4 mb-2 text-md text-gray-800">
          <h1 className="font-semibold">Total</h1>
          <h1>{(total!=0)?(total+60).toFixed(2):total.toFixed(2)} ₹</h1>
        </div>
        <div>
          <button 
            className="bg-yellow-300 p-2 rounded-lg w-full hover:bg-yellow-400 transition duration-200" 
            aria-label="Pay Now"
          >
            Pay now
          </button>
        </div>
      </div>

      </div>
    </div>
  );
});

export default Cart;
