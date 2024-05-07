import { loadStripe } from '@stripe/stripe-js';

// Using Vite's import.meta.env to access environment variables
export const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY);


console.log('Stripe Key:', import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY);
