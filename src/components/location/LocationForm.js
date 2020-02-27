import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'

const LocationForm = props => {
  const [location, setLocation] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(false);
    //this watches the field change and changes the state
  const handleFieldChange = evt => {
    const stateToChange = { ...location};
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.Name === "") {
      window.alert("Please input an employee name");
    } else {
      setIsLoading(true);
      // Create employee through post, go back to main employee page
      LocationManager.post(location)
        .then(() => props.history.push("/locations"));
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
              placeholder="Location Name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm