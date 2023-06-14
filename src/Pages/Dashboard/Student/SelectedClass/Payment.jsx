
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../../Hook/useCart";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Secret_key}`);
const Payment = () => {
  const [cart] = useCart()
  const { id } = useParams()
  const PaymentCourse = cart.find(item => item._id === id);
  return (
          <div className="w-full">
                  <Elements stripe={stripePayments}>
                          <CheckOutForm course={PaymentCourse}></CheckOutForm>
                  </Elements>
          </div>
  );
};

export default Payment;
