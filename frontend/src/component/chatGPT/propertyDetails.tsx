import React from "react";
import { locationMap } from "./locationMap";

function PropertyDetails(props: any) {
  const { title, description, lat, lng } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <LocationMap location={{ lat: lat, lng: lng }} />
    </div>
  );
}

export default PropertyDetails;
