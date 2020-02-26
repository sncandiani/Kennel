import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';

const LocationDetail = (props) => {
  const [location, setLocation] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
        });
        setIsLoading(false); // if it is not loading we can set the location and render - ? 
      });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
    props.history.push("/locations")
  );
};


  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close Location
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;