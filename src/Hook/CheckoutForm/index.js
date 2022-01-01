import React from 'react';
import { CardElement, useStripe, useElements , CardElementComponent } from "@stripe/react-stripe-js";
import { useNavigate } from 'react-router-dom';

export const CheckoutForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      navigate('/valide'); 
      //send token to backend here
    } else {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  )
};

export default CheckoutForm;    