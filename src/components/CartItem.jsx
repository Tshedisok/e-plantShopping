import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, calculateTotalAmount } from '../store/cartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = calculateTotalAmount(cartItems);

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (itemName) => {
    const item = cartItems.find(item => item.name === itemName);
    if (item) {
        dispatch(updateQuantity({ name: itemName, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrement = (itemName) => {
    const item = cartItems.find(item => item.name === itemName);
    if (item) {
      if (item.quantity > 1) {
        dispatch(updateQuantity({ name: itemName, quantity: item.quantity - 1 }));
      } else {
        dispatch(removeItem(itemName));
      }
    }
  };

  const handleRemoveItem = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1));
    return (cost * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div>
        {cartItems.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                {/* Decrement button */}
                <button 
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item.name)}
                >
                   -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                {/* Increment button */}
                <button 
                  className="cart-item-button cart-item-button-inc" 
                  onClick={() => handleIncrement(item.name)}
                > 
                    + 
                </button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button 
                className="cart-item-delete" 
                onClick={() => handleRemoveItem(item.name)}
               >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total_cart_amount">
        Grand Total: ${total.toFixed(2)}
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}> 
          Continue Shopping
          </button>
        <button className="get-started-button1" onClick={handleCheckoutShopping}> 
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
