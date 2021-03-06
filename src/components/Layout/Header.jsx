import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCart={props.openCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
