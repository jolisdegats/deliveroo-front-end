import React from "react";

const plusCircleOutlined = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <path d="M12.75 7.75a.75.75 0 00-1.5 0v3.5h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5z"></path>
    <path
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
    ></path>
  </svg>
);

const minusCircleOutlined = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <path
      fillRule="evenodd"
      d="M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm6.25 11.75a.75.75 0 000-1.5H5.75a.75.75 0 000 1.5h12.5z"
    ></path>
  </svg>
);

const OrderItem = ({ cartItem, id, cart, setCart }) => {
  const decrement = (id) => {
    let filteredCart = [];
    const newCart = [...cart];
    const cartItem = newCart.find((element) => element.id === id);
    cartItem.quantity = cartItem.quantity - 1;
    if (cartItem.quantity === 0) {
      filteredCart = newCart.filter((item) => item.id !== cartItem.id);
      return setCart(filteredCart);
    } else {
      return setCart(newCart);
    }
  };

  const increment = (id) => {
    const newCart = [...cart];
    const cartItem = newCart.find((element) => element.id === id);
    cartItem.quantity = cartItem.quantity + 1;
    return setCart(newCart);
  };
  return (
    <li key={id} className="orderItem">
      <div>
        <p className="quantityButton" onClick={() => decrement(cartItem.id)}>
          {minusCircleOutlined}
        </p>
        <p className="quantity">{cartItem.quantity}</p>
        <p className="quantityButton" onClick={() => increment(cartItem.id)}>
          {plusCircleOutlined}
        </p>
      </div>
      <div>{cartItem.title}</div>
      <div>{cartItem.price + " €"}</div>
    </li>
  );
};

export default OrderItem;
