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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const indexOfItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const itemToUpdate = state.items[indexOfItem];
    let updatedItemsList;

    if (itemToUpdate) {
      console.log("inside if statement");
      const updateItem = {
        ...itemToUpdate,
        amount: itemToUpdate.amount + action.item.amount
      };
      updatedItemsList = [...state.items]; // creating a new array , and adding in the index
      updatedItemsList[indexOfItem] = updateItem;
    } else {
      updatedItemsList = state.items.concat(action.item);
    }
    return {
      items: updatedItemsList,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === "REMOVE") {
    const itemByIndex = state.items.findIndex((item) => item.id === action.id);

    const itemToBeRemoved = state.items[itemByIndex];
    const updatedTotalAmount = state.totalAmount - itemToBeRemoved.price;
    let updatedItemList;

    if (itemToBeRemoved.amount === 1) {
      updatedItemList = state.items.filter((item) => item.id !== action.id);
    } else {
      const newObj = { ...itemToBeRemoved, amount: itemToBeRemoved.amount - 1 };
      const newArray = [...state.items];
      newArray[itemByIndex] = newObj;
      updatedItemList = newArray;
    }
    return {
      items: updatedItemList,
      totalAmount: updatedTotalAmount
    };
  }

  // return defaultState;
};

const CartProvider = (props) => {
  //declare a reducer function
  const [cartState, dispatchCartActions] = useReducer(
    stateReducer,
    defaultState
  );

  console.log(cartState);

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
