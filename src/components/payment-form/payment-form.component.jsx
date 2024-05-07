import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { BUTTON_TYPES_CLASSES } from "../button/button.component";
import Button from "../button/button.component";

import {FormContainer, PaymentFormContainer, PaymentButton} from "./payment-form.styles.jsx";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (event) => {
        if (!stripe || !elements) {
            return;
        }
    }

    return(
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PaymentButton type={BUTTON_TYPES_CLASSES.SUBMIT}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm