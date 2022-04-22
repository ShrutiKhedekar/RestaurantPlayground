import { createContext, useReducer } from "react";
import cartReducer, { innitialState } from "./cartReducer";

export const CartContext = createContext(innitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, innitialState);

  const addtoCart = (product) => {
    const payload1 = [...state.products, product];
    dispatch({
      type: "add_to_cart",
      payload: payload1,
    });
  };

  const removeFromCart = (product) => {
    console.log(product);
    dispatch({
      type: "remove_from_cart",
      payload: state.products.filter((prod) => product.name !== prod.name),
    });
  };

  const valueContext = {
    products: state.products,
    addtoCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={valueContext}>{children}</CartContext.Provider>
  );
};
