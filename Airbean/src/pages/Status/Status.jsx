import React from "react";
import { useState, useEffect } from "react";
import "./status.css";
import StatusComponent from "../../components/Status/StatusComponent";

const Status = () => {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function getOrder() {
      const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order')
      const data = await response.json();
      setOrders(data)
      console.log(data)
    }

    getOrder();
  }, [])

  const statusComponents = orders.length > 0 ? (
    orders.map(order => (
      <StatusComponent
        eta={order.eta}
        orderNr={order.orderNr}
      />
    ))
  ) : (
    <p>Loading...</p>
  );

  return (
  <div>{statusComponents}</div>
  )
};

export default Status;
