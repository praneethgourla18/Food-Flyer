import cart_png from "../utils/emptycart.png";

const Cart = () => {
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
      {/* <button 
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        onClick={() => alert("Start Shopping!")}
      >
        Start Shopping
      </button> */}
    </div>
  );
};

export default Cart;
