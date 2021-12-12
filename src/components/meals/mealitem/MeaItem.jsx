import classes from "./MealItem.module.css";
import MealItemForm from "./MealForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const AddMealToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addMealItem={AddMealToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
