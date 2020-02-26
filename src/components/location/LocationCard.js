import React from "react";
import {Link} from "react-router-dom"

const LocationCard = (props) => {
    return (
      <div className="card">
        <div className="card-content">
            <h1>Location:</h1>
            <p>{props.location.name}</p>
            <Link to={`/locations/${props.location.id}`}>
        <button>Details</button>
        </Link>
            <button type="button" onClick={() => props.removeLocation(props.location.id)}>Remove Location</button>
        </div>
      </div>
    );
  };

  export default LocationCard;