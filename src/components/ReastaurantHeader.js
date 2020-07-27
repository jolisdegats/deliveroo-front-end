import React from "react";

const RestaurantHeader = ({ data }) => {
  return (
    <div className="restaurantHeader container">
      <div className="restaurantLeftColumn">
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>
      <div className="restaurantRightColumn">
        <img src={data.restaurant.picture} alt="" />
      </div>
    </div>
  );
};

export default RestaurantHeader;
