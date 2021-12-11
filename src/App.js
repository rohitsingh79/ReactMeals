import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";

export default function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
