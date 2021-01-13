import React from "react";
import GoogleMaps from "./GoogleMaps";
import PlacesAutoComplete from "react-places-autocomplete";

export default function Maps(props) {
  return (
    <div>
      <label htmlFor="inputReportAddress" className="h2">
        Report Address
      </label>

      <PlacesAutoComplete
        value={props.address}
        onChange={props.handleAddress}
        onSelect={props.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              {props.checkFormaddress ? (
                <label className="small text-danger">Address Required</label>
              ) : null}
              <input
                {...getInputProps({
                  type: "search",
                  placeholder: "Search Address",
                  className: "form-control",
                  id: "inputReportAddress",
                  autoComplete: "off",
                })}
              />

              <div>
                <div
                  className="border shadow"
                  style={{ position: "fixed", zIndex: "99" }}
                >
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#e60029" : "#fff",
                      color: suggestion.active ? "white" : "",
                      padding: "0px 2px 1px",
                    };
                    return (
                      <div
                        key={suggestion.description}
                        {...getSuggestionItemProps(suggestion, {
                          style,
                        })}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }}
      </PlacesAutoComplete>
      <div
        className="mx-auto"
        style={{
          height: "300px",
          width: "100%",
          maxWidth: "540px",
          marginTop: "10px",
        }}
      >
        <GoogleMaps lat={props.lat} lng={props.lng} />
      </div>
    </div>
  );
}
