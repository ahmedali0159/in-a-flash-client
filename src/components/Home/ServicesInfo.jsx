import React from "react";
import { useHistory } from "react-router-dom";

export default function ServicesInfo(props) {
  const { imageURL, name, discription, price, _id } = props.sv;
  const history = useHistory()
  return (
    <div className="container col-sm-4">
      <div className="card">
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{discription}</p>
          <p className="card-text">{price}</p>
        </div>
        <div className="d-flex justify-content-center">
          <button
             onClick={() => history.push(`service/${_id}`)}
            style={{
              background: "#5352ed",
              border: "1px solid #5352ed",
              color: "black",
            }}
          >
            View More
          </button>
          <button className="mx-3"
           style={{
            background: "#5352ed",
            border: "1px solid #5352ed",
            color: "black",
          }}>
              Order Place
          </button>
        </div>
      </div>
    </div>
  );
}
