import "./modal.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();
  const { orderNr, eta } = useLocation().state;

  return (
    <div className="modal">
      <div className="modal-close">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icomoon-ignore"></g>
          <path
            d="M6.576 6.576c-5.205 5.205-5.205 13.643 0 18.849s13.643 5.205 18.849-0c5.206-5.206 5.206-13.643 0-18.849s-13.643-5.205-18.849 0zM24.67 24.67c-4.781 4.781-12.56 4.781-17.341 0s-4.781-12.56 0-17.341c4.781-4.781 12.56-4.781 17.341 0s4.78 12.56-0 17.341z"
            fill="#000000"
          ></path>
          <path
            d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z"
            fill="#000000"
          ></path>
        </svg>
        <img src="/assets" alt="" />
      </div>

      <h1
        className="modal-h1"
        onClick={() => {
          navigate("/menu", { state: { orderNr, eta } });
        }}
      >
        Meny
      </h1>
      <h1
        className="modal-h1"
        onClick={() => {
          navigate("/about", { state: { orderNr, eta } });
        }}
      >
        Vårt kaffe
      </h1>
      <h1
        className="modal-h1"
        onClick={() => {
          navigate("/status", { state: { orderNr, eta } });
        }}
      >
        Orderstatus
      </h1>
    </div>
  );
};

export default Modal;
