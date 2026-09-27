import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Like from "./components/Like";
import Message from "./Message";
import produce from "immer";
import Navbar from "./components/Navbar";
import { Cart } from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
