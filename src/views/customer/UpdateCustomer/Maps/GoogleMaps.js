import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function GoogleMaps(props) {
  const coords = { lat: 49.8143, lng: -97.1531 };
  return (
    <div style={{ marginLeft: "-15px" }}>
      <Map
        google={props.google}
        style={{
          width: "90%",
          height: "300px",
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        zoom={10}
        center={{
          lat: props.lat,
          lng: props.lng,
        }}
        initialCenter={coords}
      >
        <Marker
          title={"Client location"}
          name={"Client location"}
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
