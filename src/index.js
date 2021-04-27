import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { Auth0Provider } from "@auth0/auth0-react";
import { CartProvider } from './context/cart_context';

ReactDOM.render(
  <Auth0Provider
    domain="dev-8bjqt507.us.auth0.com"
    clientId="1V8jMalVO5lVQA1D3CJDUS3GD3P13ZiT"
    redirectUri={window.location.origin}
  >

    <CartProvider>
      <ProductsProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductsProvider>
    </CartProvider>

  </Auth0Provider>,
  document.getElementById('root')
);

