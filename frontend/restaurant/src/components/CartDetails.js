import { useContext } from "react";
import { CartContext } from "./cartContext";

const CartDetails = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      {products.length > 0 &&
        products.map((prod) => (
          <div className="card-container" key={prod.name}>
            <div>{prod.name}</div>
            <div>{prod.price}</div>
          </div>
        ))}
    </div>
  );
};

export default CartDetails;
