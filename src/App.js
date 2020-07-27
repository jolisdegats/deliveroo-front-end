import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Logo from "./components/Logo";
import ReastaurantHeader from "./components/ReastaurantHeader";
import UserOrder from "./components/UserOrder";
import Footer from "./components/Footer";

function App() {
  // console.log("Refreshing");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios("http://localhost:3001/");
    setData(response.data);
    setIsLoading(false);
    // console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // use;

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
