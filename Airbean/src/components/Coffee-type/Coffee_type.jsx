import "./coffee-type.css";
import { useState } from "react";

function Coffee_type(props) {

  function handleClick() {
    const {count, setCounter} = useState(0)
    
  }
  
  return (
      <article className="product-box">
          <img onClick={handleClick} src="../../assets/add.svg" alt="" className="plus" />
          <div className="title-box">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
          </div>
          <p className="price">{props.price} kr</p>
      </article>
  
  )
}

export default Coffee_type;
