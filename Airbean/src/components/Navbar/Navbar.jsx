import "./navbar.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (!isModalOpen) {
      openModal();
    }
    setIsModalOpen(!isModalOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div onClick={toggleModal} className="navbar-btn">
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
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Navbar;
