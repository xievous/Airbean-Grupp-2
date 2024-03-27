import "./navbar.css";
import { useState } from "react";
import Modal from "../ModalNav/Modal";
import ModalCart from "../ModalCart/ModalCart";

function Navbar() {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);
  const [isModalCartOpen, setIsModalCartOpen] = useState(false);

  const toggleModal = () => {
    setIsNavModalOpen(!isNavModalOpen);
  };

  const toggleCartModal = () => {
    setIsModalCartOpen(!isModalCartOpen);
  };

  return (
    <div className="navbar-cont">
      <div onClick={toggleModal} className="navbar-nav">
        <svg
          width="26"
          height="20"
          viewBox="0 0 26 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="26" height="2" rx="1" fill="#222222" />
          <rect y="9" width="26" height="2" rx="1" fill="#222222" />
          <rect y="18" width="26" height="2" rx="1" fill="#222222" />
        </svg>
        {isNavModalOpen && <Modal />}
      </div>
      <div value="2" onClick={toggleCartModal} className="navbar-cart">
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0486 4.04876V6.77232H5.95111V4.04876C5.95111 2.91726 6.86837 2 7.99988 2C9.13138 2 10.0486 2.91726 10.0486 4.04876ZM3.95111 4.04876C3.95111 1.81269 5.76381 0 7.99988 0C10.2359 0 12.0486 1.81269 12.0486 4.04876V6.77232V7.42274H13.5428C14.6103 7.42274 15.4897 8.26123 15.5405 9.32761L15.9978 18.9314C16.0521 20.0721 15.142 21.0266 14.0001 21.0266H2.00005C0.858129 21.0266 -0.0520048 20.0721 0.00231083 18.9314L0.459637 9.32761C0.510416 8.26123 1.38979 7.42274 2.45737 7.42274H3.95111V6.77232V4.04876ZM2.45737 9.42274H13.5428L14.0001 19.0266H2.00005L2.45737 9.42274Z"
            fill="white"
          />
        </svg>

        {isModalCartOpen && <ModalCart />}
      </div>
    </div>
  );
}

export default Navbar;

// placeholder value på cart
