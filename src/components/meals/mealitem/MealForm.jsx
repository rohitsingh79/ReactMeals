import Input from "../../UI/Input";
import classes from "./MealForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValid, setValidFlag] = useState(false);
  const addItemToCartHandler = (event) => {
    event.preventDefault();
    // setEnteredAmount(amountInputRef.current.value);
    const amount = amountInputRef.current.value;
    const amountInteger = +amount;
    if (amountInteger > 5) {
      setValidFlag(true);
      return;
    } else {
      setValidFlag(false);
    }
    props.addMealItem(amountInteger);
  };

  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button onClick={addItemToCartHandler}>+Add</button>
      {isValid && <p>Enter the correct quantity</p>}
    </form>
  );
};

export default MealItemForm;
