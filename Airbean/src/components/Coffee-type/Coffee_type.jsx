import "./coffee-type.css";

function Coffee_type(props) {
  
  return (
      <article className="product-box">
          <img src="../../assets/add.svg" alt="" className="plus" />
          <div className="title-box">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
          </div>
          <p className="price">{props.price} kr</p>
      </article>
  
  )
}

export default Coffee_type;
