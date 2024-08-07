import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productReducer, { productFetch } from "./features/productsSlice"
import { productsAPI } from './features/productsAPI';

const store = configureStore({
  reducer: {
    products: productReducer,
    [productsAPI.reducerPath]: productsAPI.reducer
  }
})

store.dispatch(productFetch())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
