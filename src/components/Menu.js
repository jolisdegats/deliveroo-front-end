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

  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ff8000"
      class="feather feather-star"
      style="width: 20px; height: 20px; margin-right: 5px;"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

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
                            {item.popular ? star + " Populaire" : ""}
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
