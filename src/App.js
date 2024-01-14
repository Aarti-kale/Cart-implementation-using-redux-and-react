import logo from './logo.svg';
// import './App.css';
import React from 'react';
import store from './cart/store';
import ShoppingCart from './cart/ShoppingCart';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <ShoppingCart/>
      </div>
    </Provider>
  );
}

export default App;
