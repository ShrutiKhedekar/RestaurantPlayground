import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { CartContext } from "./cartContext";
import RemoveIcon from "@mui/icons-material/Remove";

function CardDetails() {
  const { id } = useParams();
  const url = `http://127.0.0.1:5002/dashboard/restaurantDetails/${id}`;

  const { data, loading, error } = useFetch(url);
  const { addtoCart, products, removeFromCart } = useContext(CartContext);

  const addOrRemove = (dish) => {
    if (
      products.find(
        (product) =>
          product.name === dish.name && product.discription === dish.discription
      )
    ) {
      removeFromCart(dish);
    } else {
      addtoCart(dish);
    }
  };

  const includesProduct = (dish) => {
    if (
      products &&
      products.find(
        (product) =>
          product.name === dish.name && product.discription === dish.discription
      )
    )
      return (
        <div>
          <RemoveIcon />
        </div>
      );
    else
      return (
        <div>
          <AddIcon />
        </div>
      );
  };

  return (
    <div>
      {data &&
        data.map((dish) => (
          <Card
            key={dish.name}
            sx={{ minWidth: 275, maxWidth: 375, margin: 20 }}
          >
            <Fab
              style={{ float: "right" }}
              color="primary"
              aria-label="addremove"
              onClick={() => addOrRemove(dish)}
            >
              {includesProduct(dish)}
            </Fab>
            <CardContent>
              <Typography variant="h6" component="div">
                {dish.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {dish.price}
              </Typography>
              <Typography variant="body5">{dish.discription}</Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

export default CardDetails;
