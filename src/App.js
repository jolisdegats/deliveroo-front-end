import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Logo from "./components/Logo";
import ReastaurantHeader from "./components/ReastaurantHeader";
import UserOrder from "./components/UserOrder";
import Footer from "./components/Footer";
const numeral = require("numeral");

// Numeral JS
numeral.register("locale", "fr", {
  delimiters: {
    thousands: " ",
    decimal: ",",
  },
  abbreviations: {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t",
  },
  ordinal: function (number) {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "€",
  },
});
numeral.locale("fr");

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios(
      "https://deliveroo-backend-jolisdegats.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Logo></Logo>
      <ReastaurantHeader data={data}></ReastaurantHeader>
      <UserOrder data={data} isLoading={isLoading}></UserOrder>
      <Footer></Footer>
    </div>
  );
}

export default App;
