import React from "react";
import { CCard, CCardBody } from "@coreui/react";
import { IconContext } from "react-icons";
import * as AiIcon from "react-icons/ai";
//TableComponent
import TableComponent from "../TableComponent/Table";

const EstimatesTables = () => {
  return (
    <>
      <CCard className="shadow">
        <CCardBody>
          <div
            className="input-group mb-2"
            style={{ maxWidth: "300px", float: "right" }}
          >
            <input
              type="search"
              className="form-control mr-auto border-right-0"
              placeholder="What are you looking for?"
              style={{
                inputStyle,
                borderRadius: "25px 0px 0px 25px",
                outline: "none",
                boxShadow: "none",
                border: "1px solid #d8dbe0",
              }}
            />
            <div className="input-group-prepend">
              <div className="input-group-text searchIcon">
                <IconContext.Provider value={{ size: "20px" }}>
                  <AiIcon.AiOutlineSearch />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          {/*Table */}
          <TableComponent />
        </CCardBody>
      </CCard>
    </>
  );
};

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid #d8dbe0",
};
export default EstimatesTables;
