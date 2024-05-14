import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { currentUserSelctor } from "../../store/user/user.selector";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { BUTTON_TYPES_CLASSES } from "../button/button.component";
import {FormContainer, PaymentFormContainer, PaymentButton} from "./payment-form.styles.jsx";


const PaymentForm = () => {
    const [isPaymentProcessing, setIsPaymentProcessing] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(currentUserSelctor)
    const paymentHandler = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsPaymentProcessing(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({amount: amount * 100}), // amount in cents value in stripe
          }).then((res) => {
            return res.json();
          });
        console.log(response)
        const {paymentIntent: {client_secret}} = response;
        console.log(client_secret)
        console.log(`current user: ${currentUser.displayName}`)
        const paymentResault = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'guest',
                },
            },
        });
        setIsPaymentProcessing(false);
        if (paymentResault.error) {
            console.log(paymentResault.error.message);
        } else {
            if (paymentResault.paymentIntent.status === 'succeeded') {
                alert('Payment Succeeded');
            };
        }
    }
    

    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PaymentButton isLoading={isPaymentProcessing} buttonType={BUTTON_TYPES_CLASSES.SUBMIT}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm