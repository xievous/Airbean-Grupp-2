import React from "react";
import {useNavigate} from 'react-router-dom';
import "./landing.css";

import Navbar from "../../components/Navbar/Navbar";

const Landing = (props) => {
  const {landing} = props;
  const navigate = useNavigate();

  function handleClick(){
    navigate('/menu', {state: { event:landing}});
  }
  return (
    <div onClick={ handleClick } className="container">
    <div className="image-container">
      <img src="./assets/intro-graphic-left.svg" alt="Airbean Logo" />
      <img src="./assets/airbean-landing.svg" alt="Airbean Logo" />
      <img src="./assets/intro-graphic-right.svg" alt="Airbean Logo" />
    </div>
  </div>
  )
};

export default Landing;





 
