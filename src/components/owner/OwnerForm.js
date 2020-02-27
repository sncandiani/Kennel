import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

const OwnerForm = (props) => {
  const [owner, setOwner] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(false);
    //this watches the field change and changes the state
  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.Name === "") {
      window.alert("Please input an owner name");
    } else {
      setIsLoading(true);
      // Create employee through post, go back to main employee page
      OwnerManager.post(owner)
        .then(() => props.history.push("/owners"));
    }
  };
  //jsx to return
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Owner Name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm