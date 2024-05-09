import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { BUTTON_TYPES_CLASSES } from "../button/button.component";
import Button from "../button/button.component";

import {FormContainer, PaymentFormContainer, PaymentButton} from "./payment-form.styles.jsx";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({amount: 1010}),
          }).then((res) => {
            return res.json();
          });
        console.log(response)
    }
    

    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PaymentButton type={BUTTON_TYPES_CLASSES.SUBMIT}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm