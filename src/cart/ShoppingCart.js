import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { addToCart, removeFromCart,incrementQuantity,decrementQuantity } from './action';
import {getProducts } from './api';


const ShoppingCart = ({ cart, addToCart, removeFromCart,incrementQuantity,decrementQuantity})=>{
    useEffect(()=>{
        // Fetch products when the component mounts
        getProducts()
         .then(Products => {
            Products.forEach(product => addToCart( { id:product.code, name:product.product_name, quantity:1
                
            }));
         })
         .catch(error => console.error('Error facing products:',error));

    }, [addToCart]);
    return(
        <div>
            <h1>
                Shopping Cart
            </h1>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name}-Quantity: {item.quantity}
                        <button onClick={()=> incrementQuantity(item.id)}>+</button>
                        <button onClick={()=> decrementQuantity(item.id)}>-</button>
                        <button onClick={()=> removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Available Products</h2>
            <ul>
                {/* Assuming products are fetched from an API or hardcoded */}
                <li>
                    Product 1 <button onClick={() => addToCart({id:1, name: 'Product 1', quantity: 1})}>Add to cart</button>
                </li>
                <li>
                    Product 2 <button onClick={() => addToCart({id:2, name: 'Product 2', quantity: 1})}>Add to cart</button>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart:state.cart
    };
};

export default connect(mapStateToProps, {addToCart, removeFromCart,incrementQuantity,decrementQuantity}) (ShoppingCart);