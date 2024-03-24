import React from "react";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./landing.css";

import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/ModalNav/Modal";

const Landing = (props) => {
  const {landing} = props;
  const navigate = useNavigate();
  /*const [isNavVisible, setIsNavVisible] = useState(false);*/

  /*function handleClick(){
    setIsNavVisible(!isNavVisible);
  }*/
  function handleClick(){
    navigate('/modal', {state: { event:landing}});
  }
  return (
    <div onClick={ handleClick } className="container">
    {/*isNavVisible && <Navbar handleClick={ handleClick } />*/}
    
    
    <div className="image-container">
      <img src="./assets/intro-graphic-left.svg" alt="Intro-graphic-left" />
      <img src="./assets/airbean-landing.svg" alt="Airbean Logo" />
      <img src="./assets/intro-graphic-right.svg" alt="intro-graphic-right" />
    </div>
  </div>
  )
};

export default Landing;





 
