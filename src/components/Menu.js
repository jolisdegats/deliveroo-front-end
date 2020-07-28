import React from "react";
import starFilled from "../img/star-fill.svg";

const Menu = ({ data, isLoading, cart, setCart }) => {
  //   Cut description
  const cutDesc = (str, img) => {
    let nbChar = 0;
    if (img) {
      nbChar = 60;
    } else {
      nbChar = 100;
    }
    let trimmedString = str.substr(0, nbChar);

    if (str.length > trimmedString.length) {
      trimmedString = trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
      );
    }
    return trimmedString;
  };

  // Add items to cart function
  const addToCart = (id, quantity, title, price) => {
    let newCart = [...cart];
    const cartItem = newCart.find((element) => element.id === id);
    if (!cartItem) {
      newCart.push({ id, quantity, title, price });
    } else {
      cartItem.quantity = cartItem.quantity + 1;
    }
    return setCart(newCart);
  };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="restaurantLeftColumn">
      {data.categories.map((elem, index) => {
        return elem.meals.length === 0 ? (
          ""
        ) : (
          <div key={index} className="menu">
            <h2>{elem.name}</h2>
            <div className="allItemsPerCat">
              {elem.meals.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="menuItem"
                    onClick={() =>
                      addToCart(item.id, 1, item.title, item.price)
                    }
                  >
                    <div className="menuItemDesc">
                      <h3>{item.title}</h3>

                      <p>{cutDesc(item.description, item.picture)}</p>
                      <div className="pricePopular">
                        <div>
                          <span className="itemPrice">{item.price} €</span>
                          {item.popular ? (
                            <img
                              src={starFilled}
                              alt=""
                              className="itemPopular starIcon"
                            ></img>
                          ) : (
                            ""
                          )}
                          <span className="itemPopular">
                            {item.popular ? " Populaire" : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        className="menuItemPicture"
                        src={item.picture}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
