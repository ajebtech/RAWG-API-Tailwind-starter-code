const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    {
      /* Place your ADD_TO_CART functionality here  */
    }
  }

  if (action.type === "CLEAR_ALL_CART") {
    return {
      ...state,
      cart: [],
      totalPrice: 0,
    };
  }
  if (action.type === "true") {
    return {
      ...state,
      toogle: true,
    };
  }
  if (action.type === "false") {
    return {
      ...state,
      toogle: false,
    };
  }
};

export default reducer;
