import { useState, useEffect } from "react";
import "./status.css";
import Navbar from "../../components/Navbar/Navbar";
import StatusComponent from "../../components/Status/StatusComponent";
import { useLocation } from "react-router-dom";

const Status = () => {
  const [orders, setOrders] = useState([]);
  const { orderNr, eta } = useLocation().state;

  useEffect(() => {
    async function getOrder() {
      const response = await fetch(
        `https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/${orderNr}`
      );
      const data = await response.json();
      console.log(data);
      setOrders(data);
    }

    getOrder();
  }, []);

  const statusComponents =
    orders.length >= 0 ? (
      orders.map((order) => (
        <StatusComponent
          key={order.orderNr}
          eta={order.eta}
          orderNr={order.orderNr}
        />
      ))
    ) : (
      <p>Loading...</p>
    );

  return (
    <div>
      <Navbar />
      {statusComponents}
      <p>status page</p>
      <p>orderNr: {orderNr}</p>
      <p>ETA : {eta}mins</p>
    </div>
  );
};

export default Status;
