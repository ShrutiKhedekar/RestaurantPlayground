import { useReducer } from "react";

export const innitialState = {
  products: [],
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case "add_to_cart":
      return {
        ...state,
        products: payload,
      };

    case "remove_from_cart":
      return {
        ...state,
        products: payload,
      };

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default cartReducer;
