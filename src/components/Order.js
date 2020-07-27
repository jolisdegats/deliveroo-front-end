import React from "react";

const Order = ({ data, isLoading }) => {
  return (
    <div className="restaurantRightColumn">
      <div className="orderForm">
        <button className="confirm">Valider mon panier</button>
        <div className="orderList">
          <ul>
            <li className="orderItem">
              <div>
                <span>-</span> 3 <span>+</span>
              </div>
              <div>Brunch authentique 1 personne</div>
              <div>25,00 €</div>
            </li>
          </ul>
        </div>
        <div className="subtotal">
          <div>
            <p>Sous Total</p> <p>85,00 €</p>
          </div>
          <div>
            <p>Frais de livraison</p> <p>2,50 €</p>
          </div>
        </div>
        <div className="total">
          <p>Total</p>
          <p>87,50 €</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
