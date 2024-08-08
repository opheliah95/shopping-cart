import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productReducer, { productFetch } from "./features/productsSlice"
import { productsAPI } from './features/productsAPI';
import cartReducer from "./features/cartSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
})

store.dispatch(productFetch())

console.log('productsAPI.middleware:', typeof productsAPI.middleware); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
