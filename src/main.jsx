import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
            <App />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
