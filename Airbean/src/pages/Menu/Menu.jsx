import React from "react";
import "./menu.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import Coffee_type from "../../components/Coffee-type/Coffee_type";
import Navbar from "../../components/Navbar/Navbar";

const Menu = () => {
  const [beans, setBeans] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getBeans() {
      const response = await fetch(
        "https://airbean-9pcyw.ondigitalocean.app/api/beans/"
      );
      const data = await response.json();
      console.log(data.menu);
      setBeans(data.menu);
    }

    getBeans();
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
    console.log("product purchased" + JSON.stringify(product));
  };

  const menuComponents =
    beans.length > 0 ? (
      beans.map((bean) => (
        <div className="menu-box" key={bean.id}>
          <button className="buy-btn" onClick={() => addToCart(bean)}>
            <img src="../../assets/add.svg" alt="" className="plus" />
          </button>
          <Coffee_type title={bean.title} desc={bean.desc} price={bean.price} />
        </div>
      ))
    ) : (
      <p>Loading...</p>
    );

  return (
    <main className="menu">
      <Navbar />
      <div className="menu-box">
        <section>
          <h1>Meny</h1>
          {menuComponents}
        </section>
      </div>
    </main>
  );
};

export default Menu;
