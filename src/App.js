import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/cart";
import CartProvider from "./store/CartProvider";

export default function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header openCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
