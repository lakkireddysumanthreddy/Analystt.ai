// Cart.js
import React, { Component } from 'react';
import Header from '../Header';
import "./index.css"

class Cart extends Component {
  render() {
    const { cart } = this.props; // Ensure cart is received as a prop directly
    
    // Check if cart is undefined or null
    if (!cart) {
      return (
        <div>
          <Header />
          <div>
            <h1>Shopping Cart</h1>
            <p>Your cart is empty.</p>
          </div>
        </div>
      );
    }

    const cartItems = cart || [];
    console.log(cartItems)
    return (
      <div>
        <Header />
        <div className='cart'>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <>
            <h1>Your cart is empty.</h1>
            <img src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg?w=740" alt="img"/>
            </>
          ) : (
            <ul className='cartList'>
              {cartItems.map((product) => (
                
                <li className='product' key={product.id}>
                    <img className='image'  src={product.image} alt={`${product.title}`} />
                  <p>{product.title}</p>
                  <p>Price: ${product.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
