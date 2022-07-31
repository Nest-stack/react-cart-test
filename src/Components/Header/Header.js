import React from 'react';
import HeaderCartIcon from './HeaderCartIcon';
import classes from './Header.module.css';

const Header = props => {
  const cartClickHandler = () => {
    props.cartClick();
  };

  return (
    <div className={classes.header}>
      <span>Logo</span>
      <HeaderCartIcon onCartClick={cartClickHandler} />
    </div>
  );
};

export default Header;
