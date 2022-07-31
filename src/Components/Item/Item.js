import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Item.module.css';

const Item = props => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    cartCtx.onAddItem(props.id);
  };  
  const removeItemHandler = () => {
    cartCtx.onRemoveItem(props.id);
  };

  return (
    <Card>
      <div>
        <span>{props.name}</span><br />
        <span>{props.description}</span><br />
        <span>price: {props.price}</span><br />
        <span>qty: <span className={classes.qty}>{cartCtx.cartItems[props.id].qty}</span></span>
      </div>
      <div>
        <Button onClick={addItemHandler}>+</Button>
        <Button onClick={removeItemHandler}>-</Button>
      </div>
    </Card>
  );
};

export default Item;
