import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCollapse } from "@coreui/react";
import Axios from "axios";
import { useParams } from "react-router-dom";
//Components
import RoofInputTable from "./DataTables/Roof";
import EavesInputTable from "./DataTables/Eaves";
//import CalculationsTable from "./CalculationsTable/CalculationsTable";
//import AccessoriesTable from "./CalculationsTable/AccessoriesTable";
//style sheet
import "./style.scss";

export default function Form() {
  const [form, setForm] = useState([]);
  const [load, setLoad] = useState(false);
  const [items, setItems] = useState([]);
  const [eaveItems, setEaveItems] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [accordion, setAccordion] = useState(0);
  const [removeMsg, setRemoveMsg] = useState(false);
  const [msg, setMsg] = useState([]);
  const { id } = useParams();

  const removeRoofFace = (i) => {
    items.splice(i, 1);
    setItems(items);
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  };

  const removeEave = (i) => {
    eaveItems.splice(i, 1);
    setEaveItems(eaveItems);
    setRemoveMsg(true);
    setTimeout(() => {
      setRemoveMsg(false);
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.tableArray.length === 0 ||
      (form.tableArray.length === 0 && form.eaveArray.length === 0)
    ) {
      setMsg({ ...msg, err: true });

      setTimeout(() => {
        setMsg({ ...msg, err: false });
      }, 4000);
    } else {
      setFormLoading(true);
      setTimeout(() => {
        setFormLoading(false);
        let email = localStorage.getItem("email");
        let passToken = localStorage.getItem("passToken");
        Axios.post("/api/measure/addroofmeasure", {
          id,
          email,
          passToken,
          items,
          eaveItems,
        })
          .then((res) => {
            setItems([]);
            setEaveItems([]);
            setMsg({ ...msg, success: true });
            setTimeout(() => {
              setMsg({ ...msg, success: false });
            }, 4000);
          })
          .catch((err) => {
            console.log(err.response.data.success);
          });
      }, 1000);
    }
  };

  useEffect(() => {
    setForm({ ...form, tableArray: items, eaveArray: eaveItems });
  }, [items, eaveItems]);

  return (
    <div>
      {formLoading ? (
        <p>Submiting</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            {/*Roof Data Table */}
            <h6
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 1 ? null : 1)}
            >
              Roof Measurements
            </h6>
            <CCollapse show={accordion === 1}>
              <CCard className="p-2">
                <RoofInputTable
                  items={items}
                  load={load}
                  removeRoofFace={removeRoofFace}
                />
              </CCard>
            </CCollapse>
            {/*Eaves Input Table Data Table */}
            <h6
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 5 ? null : 5)}
            >
              Eavestrough Measurements
            </h6>
            <CCollapse show={accordion === 5}>
              <CCard>
                <CCardBody>
                  <EavesInputTable
                    form={form}
                    setForm={setForm}
                    items={items}
                    eaveItems={eaveItems}
                    removeEave={removeEave}
                    removeMsg={removeMsg}
                  />
                </CCardBody>
              </CCard>
            </CCollapse>
            {/*Calculations Table 
            <h6
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 8 ? null : 8)}
            >
              Calculations Table
            </h6>
            <CCollapse show={accordion === 8}>
              <CCard>
                <CCardBody>
                  <CalculationsTable
                    pricesData={pricesData}
                    pitchFactor={form.pitch}
                    items={items}
                  />
                </CCardBody>
              </CCard>
            </CCollapse>

            {/*Accessories Table 
            <h6
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 9 ? null : 9)}
            >
              Accessories Table
            </h6>
            <CCollapse show={accordion === 9}>
              <CCard>
                <CCardBody>
                  <AccessoriesTable
                    form={form}
                    items={items}
                    pricesData={pricesData}
                  />
                </CCardBody>
              </CCard>
            </CCollapse>*/}
            {msg.err ? (
              <div>
                <p className="text-danger text-center">
                  Please fill in the form!
                </p>
              </div>
            ) : null}
            {msg.success ? (
              <div>
                <p className="text-success text-center">Form Submitted</p>
              </div>
            ) : null}
            <div className="mt-1">
              <input
                type="submit"
                style={btnStyle}
                className="btn w-100 rounded-0"
                value="DONE"
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
}

const btnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
  backgroundColor: "#e60029",
  color: "#fff",
};
