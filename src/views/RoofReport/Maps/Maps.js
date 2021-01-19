import React from "react";
import GoogleMaps from "./GoogleMaps";
import PlacesAutoComplete from "react-places-autocomplete";

export default function Maps(props) {
  return (
    <div>
      <label
        htmlFor="inputReportAddress"
        className="h2"
        style={{ fontFamily: "LatoBold" }}
      >
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
                  className: "form-control mt-2",
                  id: "inputReportAddress",
                  autoComplete: "off",
                })}
                style={inputStyle}
              />

              <div>
                <div
                  className="border shadow"
                  style={{ position: "relative", zIndex: "99" }}
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
          marginTop: "17px",
        }}
      >
        <GoogleMaps lat={props.lat} lng={props.lng} />
      </div>
    </div>
  );
}

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #d8dbe0",
};
