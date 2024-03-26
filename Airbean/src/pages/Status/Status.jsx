import React from "react";
import "./status.css";

const Status = () => {
  return <div>Status</div>;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrder() {
      const response = await fetch(
        "https://airbean-9pcyw.ondigitalocean.app/order"
      );
      const data = await response.json();
      setOrders(data);
      console.log(data);
    }

    getOrder();
  }, []);

  const statusComponents = orders.map((order) => (
    <StatusComponent eta={order.eta} key={order.orderNr} />
  ));

  return <div>{statusComponents}</div>;
};

export default Status;
