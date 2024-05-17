import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./store/store";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Elements} from '@stripe/react-stripe-js';
import { stripePromise } from "./utils/strip/strip.utils";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
            <App />
      </Elements>
    </BrowserRouter>
  </PersistGate>
  </Provider>
  </React.StrictMode>
);
