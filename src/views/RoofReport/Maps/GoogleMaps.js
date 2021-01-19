import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function GoogleMaps(props) {
  const normalMapsStyle = {
    height: "298px",
    width: "95%",
  };
  return (
    <div>
      <Map
        className="col-xs-12"
        containerStyle={normalMapsStyle}
        google={props.google}
        defaultZoom={5}
        center={{
          lat: props.lat,
          lng: props.lng,
        }}
      >
        <Marker
          title={"Your Client location"}
          position={{
            lat: props.lat,
            lng: props.lng,
          }}
        />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAHH1vjw8fQ76xLzqK28QphyC9koTpTfTw",
})(GoogleMaps);
