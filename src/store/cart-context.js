import React from "react";

const CartContext = React.createContext({
  cartItems: [
    {id: '0', qty: 0, amount: 8},
    {id: '1', qty: 0, amount: 2},
    {id: '2', qty: 0, amount: 4},
    {id: '3', qty: 0, amount: 1}
  ],
  totalAmount: 0,
  totalCount: 0,
  onAddItem: (id) => {},
  onRemoveItem: (id) => {}
});

export const CartContextProvider = props => {
  return 
};

export default CartContext;