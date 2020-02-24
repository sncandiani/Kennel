import React from "react";

const LocationCard = (props) => {
    return (
      <div className="card">
        <div className="card-content">
    <p>{props.location.name}</p>
        </div>
      </div>
    );
  };

  export default LocationCard;