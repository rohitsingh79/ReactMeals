import { useReducer } from "react";

import CartContext from "./cart-context";

//declare the default state of the reducer
const defaultState = {
  items: [],
  totalAmount: 0
};

// declare the reducer function
const stateReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItem = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  //declare a reducer function
  const [cartState, dispatchCartActions] = useReducer(
    stateReducer,
    defaultState
  );

  //declare the add item handler
  const addItemToCartHandler = (singleItem) => {
    dispatchCartActions({ type: "ADD", item: singleItem });
  };
  const removeItemFromCartHandler = (singleId) => {
    dispatchCartActions({ type: "REMOVE", id: singleId });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
