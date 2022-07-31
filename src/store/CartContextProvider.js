import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    // console.log(`add item - ${action.itemId}`);

    const updatedCartItems = state.cartItems;
    if (state.cartItems[action.itemId].qty === 5) {
      updatedCartItems[action.itemId].qty += + 0;
    } else if (state.cartItems[action.itemId].qty < 5) {
      updatedCartItems[action.itemId].qty += + 1;
    };

    const updatedCartCount = updatedCartItems.reduce((sum, curr) => {
      return sum + +curr.qty;
    }, 0);
    const updatedCartAmount = updatedCartItems.reduce((sum, curr) => {
      return sum + (+curr.qty * +curr.amount);
    }, 0);
    console.log(updatedCartAmount);
    return {
      cartItems: updatedCartItems,
      totalCartCount: updatedCartCount,
      totalCartAmount: updatedCartAmount
    };
  } else if (action.type === 'REMOVE_ITEM') {
    const updatedCartItems = state.cartItems;
    if (state.cartItems[action.itemId].qty === 0) {
      updatedCartItems[action.itemId].qty += - 0;
    } else if (state.cartItems[action.itemId].qty > 0) {
      updatedCartItems[action.itemId].qty += - 1;
    };

    const updatedCartCount = updatedCartItems.reduce((sum, curr) => {
      return sum + +curr.qty;
    }, 0);
    const updatedCartAmount = updatedCartItems.reduce((sum, curr) => {
      return sum + (+curr.qty * +curr.amount);
    }, 0);
    console.log(updatedCartAmount);
    return {
      cartItems: updatedCartItems,
      totalCartCount: updatedCartCount,
      totalCartAmount: updatedCartAmount
    };
  };
  return state;
};

const CartContextProvider = props => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    cartItems: [
      { id: '0', qty: 0, amount: 8 },
      { id: '1', qty: 0, amount: 2 },
      { id: '2', qty: 0, amount: 4 },
      { id: '3', qty: 0, amount: 1 }
    ],
    totalCartCount: 0,
    totalCartAmount: 0
  });

  const cartAddItemHandler = (id) => {
    dispatchCart({
      type: 'ADD_ITEM',
      itemId: id
    });
  };
  const cartRemoveItemHandler = (id) => {
    dispatchCart({
      type: 'REMOVE_ITEM',
      itemId: id
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.cartItems,
        totalCount: cartState.totalCartCount,
        totalAmount: cartState.totalCartAmount,
        onAddItem: cartAddItemHandler,
        onRemoveItem: cartRemoveItemHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;