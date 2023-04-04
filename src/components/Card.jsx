import React from "react";

function Card({ imgSrc }) {
  return (
    <div className="card">
      <div className="card-content">
        <img className="image" alt="img" src={imgSrc} />
      </div>
    </div>
  );
}

export default Card;
