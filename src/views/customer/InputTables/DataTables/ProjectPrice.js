import React, { useState, useEffect } from "react";
import { CCard, CCollapse } from "@coreui/react";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function ProjectPrice() {
  const [collapse, setCollapse] = useState(false);
  const [form, setForm] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const [pricesData, setPricesData] = useState([]);
  const [roof, setRoof] = useState([]);
  const [eave, setEave] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }

    Axios.post("/api/measure/addallmeasure", { id, email, passToken })
      .then((res) => {
        //add chimney for test
        let roofs = res.data.roof;
        let t = [];
        roofs.map((n) => {
          t.push(parseInt(n.chimney));
          return t;
        });
        console.log(t.reduce((a, b) => a + b, 0));
        //setEave(res.data.eave);
        //setSelection(res.data.selection);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, email, passToken, history]);

  useEffect(() => {
    Axios.post("/api/price/materials", { email, passToken })
      .then((res) => {
        let response = res.data.data;
        response.map((n) => {
          setPricesData(n);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <form>
        <h6
          className="customersTable_sliderBtn border w-100 text-center p-1"
          onClick={(e) => {
            e.preventDefault();
            setCollapse(!collapse);
          }}
        >
          Project Pricing
        </h6>
        <CCollapse show={collapse}>
          <CCard className="p-2">
            <div className="row no-gutters">
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Project Pricing</h5>
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  id="materialsTotal"
                  sideLabel="$"
                  placeholder="Materials"
                  label="Materials"
                  bottomLabel="Material Costs including delivery"
                  value="11,140.22"
                  disabled={true}
                  readOnly={true}
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  id="laboursTotal"
                  sideLabel="$"
                  placeholder="Labour"
                  label="Labour"
                  bottomLabel="Labour Costs"
                  value="9,140.22"
                  disabled={true}
                  readOnly={true}
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  id="profits"
                  sideLabel="$"
                  placeholder="Profit"
                  label="Profit"
                  bottomLabel="Gross Profit"
                  value="5,140.22"
                  disabled={true}
                  readOnly={true}
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="number"
                  id="square"
                  sideLabel="$"
                  placeholder="$/Square"
                  label="$/Square"
                  bottomLabel="Price per square (100 sq.ft)"
                  value={form.squarePrice}
                  onChange={(e) =>
                    setForm({ ...form, squarePrice: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="number"
                  id="profitIn"
                  sideLabel="$"
                  placeholder="Profit in %"
                  label="Profit in %"
                  bottomLabel="Gross profit in percentage"
                  value={form.grossProfit}
                  onChange={(e) =>
                    setForm({ ...form, grossProfit: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <CustomInput
                  type="number"
                  id="margin"
                  sideLabel="$"
                  placeholder="Margin %"
                  label="Margin %"
                  bottomLabel="Gross margin in percentage"
                  value={form.margin}
                  onChange={(e) => setForm({ ...form, margin: e.target.value })}
                />
              </div>
              <div className="col-12 mt-2">
                <input
                  type="submit"
                  style={btnStyle}
                  className="btn w-100 rounded-0"
                  value="Complete Pricing"
                />
              </div>
            </div>
          </CCard>
        </CCollapse>
      </form>
    </div>
  );
}

const CustomInput = (props) => {
  return (
    <div className="mt-2">
      <label
        className="p2"
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          marginBottom: "-2px",
        }}
      >
        {props.label}
      </label>
      <div className="input-group">
        {props.sideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text"
              style={
                props.disabled
                  ? { backgroundColor: "#d8dbe0" }
                  : { backgroundColor: "#fff" }
              }
            >
              {props.sideLabel}
            </div>
          </div>
        ) : null}
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          autoComplete="off"
          style={props.sideLabel ? moneyInputStyle : inputStyle}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          readOnly={props.readOnly}
        />
        {props.rightSideLabel ? (
          <div className="input-group-prepend">
            <div
              className="input-group-text rounded-right"
              style={
                props.disabled
                  ? {
                      backgroundColor: "#d8dbe0",
                      borderLeft: "none",
                    }
                  : {
                      backgroundColor: "#fff",
                      borderLeft: "none",
                    }
              }
            >
              {props.rightSideLabel}
            </div>
          </div>
        ) : null}
      </div>
      {props.bottomLabel ? (
        <div className="text-center">
          <span
            className="small"
            style={{
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginBottom: "-2px",
            }}
          >
            {props.bottomLabel}
          </span>
        </div>
      ) : null}
    </div>
  );
};

const headerStyle = {
  backgroundColor: "#f4f4f4",
};

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};

const moneyInputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  borderLeft: "none",
  paddingLeft: "0px",
  marginLeft: "-11px",
};

const btnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
  backgroundColor: "#e60029",
  color: "#fff",
};
