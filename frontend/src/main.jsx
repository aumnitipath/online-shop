import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, { productsFetch } from "./features/productsSlice.js";
import { productsApi } from "./features/productsAPI.js";
import cartReducer, { getTotals } from "./features/cartSlice.js";
import authReducer from "./features/authSlice.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
