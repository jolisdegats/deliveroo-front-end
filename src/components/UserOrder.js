import React, { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";

const UserOrder = ({ data, isLoading }) => {
  const [cart, setCart] = useState([]);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="userOrderBackground">
      <div className="container">
        <div className="userOrder">
          <Menu
            data={data}
            isLoading={isLoading}
            cart={cart}
            setCart={setCart}
          ></Menu>
          <Cart cart={cart} setCart={setCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
