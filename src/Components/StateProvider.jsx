// This file defines a custom context, a state provider component, and a custom hook to access the global state and actions.

import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

// Create a new context
export const Context = createContext();

// StateProvider component that wraps the application and manages global state
function StateProvider({ children }) {
  // Initial state of the application
  let initial = {
    cart: [], // Array to store items in the cart
    toogle: false, // A boolean flag to toggle cart UI element
    totalPrice: 0, // The total price of items in the cart
  };

  // Functions to perform actions and update the state using the reducer
  function addToCart(image, name, price) {
    dispatch({ type: "ADD_TO_CART"});
  }

  // Functions to remove single cart item
  function removeFromCart(name) {
    dispatch({ type: "REMOVE_FROM_CART" });
  }

  // Functions to remove all cart item
  function clearCart() {
    dispatch({ type: "CLEAR_ALL_CART" });
  }

  // Functions to perform to toogle cart UI
  function toogleTrue() {
    dispatch({ type: "true" });
  }

  // Functions to perform to toogle cart UI
  function toogleFalse() {
    dispatch({ type: "false" });
  }

  // Use the reducer to manage state updates
  const [state, dispatch] = useReducer(reducer, initial);

  // Debugging: log the current state to the console
  // console.log(state);

  // Provide the state and action functions to the child components through the context
  return (
    <Context.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        clearCart,
        toogleTrue,
        toogleFalse,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// Custom hook to access the global state and actions
export const useContextGlobally = () => {
  return useContext(Context);
};

export default StateProvider;
