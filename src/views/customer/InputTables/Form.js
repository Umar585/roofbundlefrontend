import React, { useState } from "react";
import { CCard, CCardBody, CCollapse } from "@coreui/react";
//Components
import RoofInputTable from "./DataTables/Roof";
import VentInputTable from "./DataTables/Vent";
import PlumbingStackInputTable from "./DataTables/PlumbingStack";
import EavesInputTable from "./DataTables/Eaves";
import ProfessionalProcedures from "./DataTables/ProfessionalProcedures";
import UnderlayOptions from "./DataTables/UnderlayOptions";
import CalculationsTable from "./CalculationsTable/CalculationsTable";
import AccessoriesTable from "./CalculationsTable/AccessoriesTable";
//style sheet
import "./style.scss";

export default function Form(props) {
  const form = props.form;
  const [load, setLoad] = useState(false);
  const setForm = props.setForm;
  const [items, setItems] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const pricesData = props.pricesData;
  const [accordion, setAccordion] = useState(0);

  const removeRoofFace = (i) => {
    items.splice(i, 1);
    setItems(items);
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  };

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const inputs = event.target.form;
      const index = Array.prototype.indexOf.call(inputs, event.target);
      inputs.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, tableArray: items });
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      console.log(form);
    }, 1000);
  };

  return (
    <div>
      {formLoading ? null : (
        <>
          <form onSubmit={handleSubmit}>
            {/*Roof Data Table */}
            <h5
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 1 ? null : 1)}
            >
              Roof Measurements
            </h5>
            <CCollapse show={accordion === 1}>
              <CCard>
                <CCardBody>
                  <RoofInputTable
                    form={form}
                    setForm={setForm}
                    items={items}
                    load={load}
                    removeRoofFace={removeRoofFace}
                  />
                </CCardBody>
              </CCard>
            </CCollapse>
            {/*Vent Data Table */}
            <h5
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 2 ? null : 2)}
            >
              Vent Table
            </h5>
            <CCollapse show={accordion === 2}>
              <CCard>
                <CCardBody>
                  <VentInputTable
                    form={form}
                    setForm={setForm}
                    handleEnter={handleEnter}
                  />
                </CCardBody>
              </CCard>
            </CCollapse>
            {/*Plumbing Stack Input Table Data Table */}
            <h5
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 3 ? null : 3)}
            >
              Plumbing-Stack Table
            </h5>
            <CCollapse show={accordion === 3}>
              <CCard>
                <CCardBody>
                  <PlumbingStackInputTable
                    form={form}
                    setForm={setForm}
                    handleEnter={handleEnter}
                  />
                </CCardBody>
              </CCard>
            </CCollapse>
            {/*Eaves Input Table Data Table */}
            <h5
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 4 ? null : 4)}
            >
              Eavestrough Table
            </h5>
            <CCollapse show={accordion === 4}>
              <CCard>
                <CCardBody>
                  <EavesInputTable
                    form={form}
                    setForm={setForm}
                    handleEnter={handleEnter}
                    items={items}
                  />
                </CCardBody>
              </CCard>
            </CCollapse>
            {/*Professional Procedures Table */}
            <h5
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 5 ? null : 5)}
            >
              Professional Procedures
            </h5>
            <CCollapse show={accordion === 5}>
              <CCard>
                <CCardBody>
                  <ProfessionalProcedures form={form} setForm={setForm} />
                </CCardBody>
              </CCard>
            </CCollapse>
            {/*Underlay Options Table */}
            <h5
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 6 ? null : 6)}
            >
              Underlay Options
            </h5>
            <CCollapse show={accordion === 6}>
              <CCard>
                <CCardBody>
                  <UnderlayOptions form={form} setForm={setForm} />
                </CCardBody>
              </CCard>
            </CCollapse>
            {/*Calculations Table */}
            <h5
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 7 ? null : 7)}
            >
              Calculations Table
            </h5>
            <CCollapse show={accordion === 7}>
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

            {/*Accessories Table */}
            <h5
              className="customersTable_sliderBtn border w-100 text-center p-1"
              onClick={() => setAccordion(accordion === 8 ? null : 8)}
            >
              Accessories Table
            </h5>
            <CCollapse show={accordion === 8}>
              <CCard>
                <CCardBody>
                  <AccessoriesTable
                    form={form}
                    items={items}
                    pricesData={pricesData}
                  />
                </CCardBody>
              </CCard>
            </CCollapse>
            <div className="mt-1">
              <input
                type="submit"
                className="btn btn-success w-100 rounded-0"
                value="Save"
              />
            </div>
            {/*</CCard>*/}
          </form>
        </>
      )}
    </div>
  );
}
