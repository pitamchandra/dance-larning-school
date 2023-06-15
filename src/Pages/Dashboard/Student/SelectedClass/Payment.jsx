
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../../Hook/useCart";
import CheckOutForm from "./CheckOutForm";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  const [cart] = useCart()
  const { id } = useParams()
  const PaymentCourse = cart.find(item => item._id === id);
  return (
          <div className="w-full">
                  <Elements stripe={stripePromise}>
                          <CheckOutForm course={PaymentCourse}></CheckOutForm>
                  </Elements>
          </div>
  );
};

export default Payment;
