import React, { useContext } from 'react';
import Button from '../UI/Button';
import classes from './HeaderCartIcon.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartIcon = props => {
  const cartCtx = useContext(CartContext);

  const modalShowHandler = () => {
    props.onCartClick();
  };

  return (
    <div className={classes.cart} >
      <Button type='click' onClick={modalShowHandler}>Your Order: <span>{cartCtx.totalCount}</span></Button>
    </div>
  );
};

export default HeaderCartIcon;
