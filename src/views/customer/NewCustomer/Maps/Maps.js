import React from "react";
import GoogleMaps from "./GoogleMaps";
import PlacesAutoComplete from "react-places-autocomplete";

import { IconContext } from "react-icons";
import * as BiIcon from "react-icons/bi";

export default function Maps(props) {
  const checkAddress = props.checkFormaddress;
  return (
    <div>
      <PlacesAutoComplete
        value={props.address}
        onChange={props.handleAddress}
        onSelect={props.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div
                    className="input-group-text"
                    style={{
                      backgroundColor: "#fff",
                      borderRight: "none",
                    }}
                  >
                    <IconContext.Provider value={{ size: "20px" }}>
                      <BiIcon.BiMap
                        style={{
                          color: "#fff",
                          backgroundColor: "#414141",
                          padding: "3px",
                          borderRadius: "25px",
                        }}
                      />
                    </IconContext.Provider>
                  </div>
                </div>{" "}
                <input
                  {...getInputProps({
                    type: "search",
                    placeholder: "Address",

                    id: "inputReportAddress",
                    autoComplete: "off",
                  })}
                  className={
                    checkAddress
                      ? "form-control border-left-0 border-danger"
                      : "form-control border-left-0"
                  }
                  style={inputStyle}
                />
              </div>

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
          height: "150px",
          marginTop: "10px",
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
