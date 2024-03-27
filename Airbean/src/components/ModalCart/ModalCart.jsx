import "./modalcart.css";
import { remove } from "../../store/cartSlice";
import Coffee_type from "../Coffee-type/Coffee_type";
import { useSelector, useDispatch } from "react-redux";
import TakeMyMoneyBtn from "../TakeMyMoneyBtn/TakeMyMoneyBtn";

const ModalCart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const menuComponents = products.map((bean) => (
    <div className="menu-box" key={bean.id}>
      <button
        style={{ backgroundColor: "red" }}
        className="buy-btn"
        onClick={() => removeFromCart(bean.id)}
      >
        remove
      </button>
      <Coffee_type title={bean.title} desc={bean.desc} price={bean.price} />
    </div>
  ));

  return (
    <div className="modal smaller-modal">
      <h1>Din beställning</h1>
      {menuComponents}
      <TakeMyMoneyBtn />
    </div>
  );
};

export default ModalCart;
