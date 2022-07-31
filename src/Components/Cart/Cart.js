import React, { useEffect, useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';
import classes from './Cart.module.css';

const Cart = props => {
  const [orderIsDisabled, setOrderIsDisabled] = useState(false);
  const cartCtx = useContext(CartContext);

  const cartListData = [];
  for (let i = 0; i < cartCtx.cartItems.length ; i++) {
    cartListData.push({
      id: props.menuData[i].id,
      name: props.menuData[i].name,
      price: props.menuData[i].price,
      qty: cartCtx.cartItems[i].qty
    })
  };

  const cartFilteredListData = cartListData.filter(cartItem => cartItem.qty > 0);
  
  useEffect(() => {
    if ( cartFilteredListData.length === 0 ) {
      setOrderIsDisabled(true);
    } else {
      setOrderIsDisabled(false);
    }
  }, [cartFilteredListData.length]);

  const orderHandler = () => {
    console.log(cartCtx.cartItems);
  };
  const modalOffHandler = () => {
    props.clearModal();
  };
  
  const CartItems = props => {
    return <ul>{cartFilteredListData.map( item => {
      return <CartItem
      key= {item.id}
              id= {item.id}
              name= {item.name}
              price= {item.price}
              />
            })}
      </ul>
  };  
  const CartItem = props => {
    const addItemHandler = () => {
      cartCtx.onAddItem(props.id);
    };  
    const removeItemHandler = () => {
      cartCtx.onRemoveItem(props.id);
    };
    return <li>
        <div>
          <span>name: {props.name} | </span> 
          <span>price: {props.price} | </span>
          <span>qty: <span className={classes.qty}>{cartCtx.cartItems[props.id].qty}</span></span>
        </div>
        <div>
          <Button onClick={addItemHandler}>+</Button>
          <Button onClick={removeItemHandler}>-</Button>
        </div>
    </li>
  };  

  return (
    <React.Fragment>
      <h2>Order Modal</h2>      
      <CartItems />
      <h6>Total Amount: <span className={classes.totalAmount}>{cartCtx.totalAmount}</span></h6>
      <Button type='click' onClick={modalOffHandler}>Close</Button>
      <Button 
        type='click' 
        onClick={orderHandler}
        disabled={orderIsDisabled}
      >Order</Button>
    </React.Fragment>
  );
};

export default Cart;
