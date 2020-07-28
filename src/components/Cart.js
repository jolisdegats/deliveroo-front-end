import React from "react";
import OrderItem from "./OrderItem";
const numeral = require("numeral");

const Cart = ({ cart, setCart }) => {
  let subtotalPrice = 0;
  let totalPrice = 0;
  const deliveryCost = 2.5;
  const deliveryCostStr = numeral(deliveryCost).format("0,0.00 $");

  const subtotal = () => {
    for (let i = 0; i < cart.length; i++) {
      subtotalPrice = subtotalPrice + cart[i].price * cart[i].quantity;
    }

    return numeral(subtotalPrice).format("0,0.00 $");
  };

  const total = () => {
    totalPrice = subtotalPrice + deliveryCost;
    return numeral(totalPrice).format("0,0.00 $");
  };

  return (
    <div className="restaurantRightColumn cart">
      <div
        className={
          cart.length === 0 ? "orderForm enabled" : "orderForm disabled"
        }
      >
        <button className="disabledCart cartButton">Valider mon panier</button>
        <div className="emptyCart">Votre panier est vide</div>
      </div>
      <div
        className={
          cart.length === 0 ? "orderForm disabled" : "orderForm enabled"
        }
      >
        <div className="buttons">
          <button className="confirmCart cartButton">Valider mon panier</button>
          <button
            onClick={() => {
              let copy = [...cart];
              copy = [];
              setCart(copy);
            }}
            className="resetCart cartButton"
          >
            Reset
          </button>
        </div>
        <div className="orderList">
          <ul>
            {cart.map((cartItem, id) => {
              return (
                <OrderItem
                  cartItem={cartItem}
                  id={id}
                  cart={cart}
                  setCart={setCart}
                  key={id}
                ></OrderItem>
              );
            })}
          </ul>
        </div>
        <div className="subtotal">
          <div>
            <p>Sous Total</p> <p>{subtotal()}</p>
          </div>
          <div>
            <p>Frais de livraison</p> <p>{deliveryCostStr}</p>
          </div>
        </div>
        <div className="total">
          <p>Total</p>
          <p>{total()}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
