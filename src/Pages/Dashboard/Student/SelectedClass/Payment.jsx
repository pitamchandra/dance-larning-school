
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../../Hook/useCart";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Secret_key}`);
const Payment = () => {
    const [cart] =useCart()
 const id = localStorage.getItem("id");
 const singleClass = cart.find((item) => item._id === id);
  console.log(singleClass)
  const {price} = singleClass;
  console.log( "price",price)

  return ( 
    <div className="border md:p-10 p-5 shadow  rounded">
      <h1 className="text-4xl font-bold my-8 ">Welcome to payment page</h1>
      <p className="text-2xl font-semibold text-center mb-4">
        
        Your Total Price :
      </p>
      <Elements stripe={stripePromise}>
        {/* <CheckOutForm singleClass={singleClass} price={price}  /> */}
      </Elements>
    </div>
  );
};

export default Payment;
