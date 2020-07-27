import React from "react";

const Menu = ({ data, isLoading }) => {
  //   Cut description
  const cutDesc = (str, img) => {
    let nbChar = 0;
    if (img) {
      nbChar = 60;
    } else {
      nbChar = 100;
    }

    var trimmedString = str.substr(0, nbChar);

    if (str.length > trimmedString.length) {
      trimmedString = trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
      );
    }

    return trimmedString;
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
                // console.log(item);
                return (
                  <div key={id} className="menuItem">
                    <div className="menuItemDesc">
                      <h3>{item.title}</h3>

                      <p>{cutDesc(item.description, item.picture)}</p>
                      <div className="pricePopular">
                        <div>
                          <span className="itemPrice">{item.price} €</span>
                          <span className="itemPopular">
                            {item.popular ? "★ Populaire" : ""}
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
