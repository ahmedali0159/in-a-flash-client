import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Home/Header";

export default function ServiceDetails() {
  const { _id } = useParams();
  console.log(_id);
  const [services, setServices] = useState({});

  useEffect(() => {
    fetch(`https://fierce-tundra-16909.herokuapp.com/service/${_id}`)
      .then((res) => res.json())
      .then((data) => setServices(data[0]));
  }, [_id]);
  return (
    <div>
      <Header />
      <div class="card mb-3">
        <img src={services.imageURL} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{services.name}</h5>
          <h5 class="card-title">{services.price}</h5>
          <p class="card-text">{services.discription}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}
