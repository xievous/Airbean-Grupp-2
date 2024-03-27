import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TakeMyMoneyBtn = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const POSTURL = "https://airbean-9pcyw.ondigitalocean.app/api/beans/order";

  const HandleClick = async () => {
    if (cartItems.length === 0) {
      console.error("Cart is empty. Please add items to your cart.");
      return;
    }

    const POST = {
      details: {
        order: cartItems.map((item) => ({
          name: item.title,
          price: item.price,
        })),
      },
    };

    try {
      const response = await fetch(POSTURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(POST),
      });

      if (!response.ok) {
        throw new Error("Error");
      }

      const { eta, orderNr } = await response.json();
      console.log("Response: Eta", eta, "OrderNr", orderNr);
      navigate("/status", { state: { orderNr, eta } });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return <button onClick={HandleClick}>Take My Money</button>;
};

export default TakeMyMoneyBtn;
