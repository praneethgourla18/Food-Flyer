import cart_png from "../utils/emptycart.png";
import { useSelector } from 'react-redux';
import { IMG_URL } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="mt-[110px] flex flex-col items-center justify-center px-4">
        <img
          className="w-[300px] md:w-[400px] transform transition-transform duration-300 hover:scale-105"
          src={cart_png}
          alt="Empty Cart"
        />
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
    <div>
    <div className="mt-[120px] w-11/12 md:w-5/12 p-5 mx-auto  border-2 border-gray-200 rounded-lg">
      {cartItems.map((item,index)=>{
         const {name,price,imageId,defaultPrice} = item?.card?.card?.itemCards[index]?.card?.info;
         return(
           <div>
            <div
             key={index} 
             className={(index==(cartItems.length-1))? " py-2 flex justify-between " :"border-b border-gray-200 py-2 flex justify-between"}
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
         )
      })
        }
  </div>

    </div>
  );
};

export default Cart;
