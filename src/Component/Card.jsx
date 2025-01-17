import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Card(props){

    return(
        <>
    <div className="card" style={{width:400}} id="div">
    <img className="card-img-top" src={props.picture_url} alt="Card image" id="a"/>
    <div className="card-body">
    <h4 className="card-title">{props.id}</h4>
      <h4 className="card-title">{props.name}</h4>
      <p className="card-text">{props.category}.</p>
      <p className="card-text">{props.price}.</p>
      <p>
        <Link to={`/product/${props.id}`}>ReadMore...</Link>
      </p>
    </div>
  </div>
        </>
    );
}

export default Card;