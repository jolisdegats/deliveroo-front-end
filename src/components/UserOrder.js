import React from "react";
import Menu from "./Menu";
import Order from "./Order";

const UserOrder = ({ data, isLoading }) => {
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="userOrderBackground">
      <div className="container">
        <div className="userOrder">
          <Menu data={data} isLoading={isLoading}></Menu>
          <Order data={data} isLoading={isLoading}></Order>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
