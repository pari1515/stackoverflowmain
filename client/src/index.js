import React from "react";
//import { useMediaQuery } from 'react-responsive'
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
const store = createStore(Reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));



Kommunicate.init("20e7dfa5f155c93d0ccd63888ca204de6", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});


/*
const express = require("express");
const stripe = require("stripe")("<your_stripe_secret_key>");

const app = express();
app.use(express.json());

app.post("/create-subscription", async (req, res) => {
  const customer = await stripe.customers.create({
    email: req.body.email,
    source: req.body.stripeToken,
  });

  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ plan: req.body.plan }],
  });

  res.json({ subscription });
});

app.listen(3000,() => {
console.log("Server running on port 3000");
});
subscription end*/
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);