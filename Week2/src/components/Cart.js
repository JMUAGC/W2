// src/components/Cart.js


import React from 'react';

const Cart = () => {
    const handleSubmit = () => {      
        console.log("Cart Submited");
    };

    return (
        <div>
            <h1>Cart</h1>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Cart;

