import React from "react";
const OwnerCard = (props) => {
    return (
      <div className="card">
        <div className="card-content">
        <h1>Owners:</h1>
          <ul>
              <li>{props.owner.name}</li>
          </ul>
        </div>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove Owner</button>
      </div>
    );
  };

  export default OwnerCard;
