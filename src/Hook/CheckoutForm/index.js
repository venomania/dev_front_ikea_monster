import React from 'react';
import { CardElement, useStripe, useElements , CardElementComponent ,charges } from "@stripe/react-stripe-js";
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

    const charge = await stripe.charges.create({
      amount: 2000,
      currency: 'eur',
      source: paymentMethod.id,
      description: 'My First Test Charge (created for API docs)',
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod.id);
      charge();
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