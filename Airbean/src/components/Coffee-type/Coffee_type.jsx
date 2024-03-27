import "./coffee-type.css";
import { useState } from "react";

function Coffee_type(props) {

  return (
      <article className="product-box">
          <div className="title-box">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
          </div>
          <p className="price">{props.price} kr</p>
      </article>
  
  )
}

export default Coffee_type;
