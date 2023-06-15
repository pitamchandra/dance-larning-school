import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckOutForm = ({course}) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate=useNavigate()



useEffect(() => {
    if (course && course.price > 0) {
        axiosSecure.post('/create-payment',{ price: course.price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }
}, [course, axiosSecure])

const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
        return
    }
const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if (error) {
        console.log('error', error)
        setCardError(error.message);
    }
    else {
        setCardError('');
        // console.log('payment method', paymentMethod)
    }

    setProcessing(true)
const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
    );
if (confirmError) {
        console.log(confirmError);
    }
console.log('payment intent', paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        // save payment information to the server
        const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price:course.price,
            date: new Date(),
            quantity: course.length,
            cartItems: course._id,

        }
            axiosSecure.post('/payments', payment)
            .then(res => {
                if (res.data.insertResult.insertedId) {
                    Swal.fire(
                        'Payment successful!',
                        'Go to enroll classes to see your course',
                        'success'
                      )
                }
            })
            navigate('/dashboard/selectedClass')
    }}


return (
    <div className="w-full p-16">
        <form className=" border border-primary p-10" onSubmit={handleSubmit}>
          <h1 className="mb-5 text-xl text-primary font-semibold">Your Total Cost: ${course.price}</h1>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            border:"1px solid red",
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </div>
    );
};


export default CheckOutForm;