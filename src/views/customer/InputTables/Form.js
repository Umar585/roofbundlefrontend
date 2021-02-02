import React, { useState } from "react";
import { CButton, CCard, CCardBody, CCollapse } from "@coreui/react";
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
  const setForm = props.setForm;
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const pricesData = props.pricesData;

  const [collapse, setCollapse] = useState(false);
  const [collapseVent, setCollapseVent] = useState(false);
  const [collapsePlumbingStack, setCollapsePlumbingStack] = useState(false);
  const [collapseEaves, setCollapseEaves] = useState(false);
  const [collapseCalculations, setCollapseCalculations] = useState(false);
  const [
    collapseProfessionalProcedures,
    setCollapseProfessionalProcedures,
  ] = useState(false);
  const [collapseUnderlayOptions, setCollapseUnderlayOptions] = useState(false);
  const [collapseAccessories, setCollapseAccessories] = useState(false);

  const removeRoofFace = (i) => {
    items.splice(i, 1);
    setItems(items);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
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
            <CCard>
              {/*Roof Data Table */}
              <CButton
                className="btnStyle"
                onClick={(e) => {
                  e.preventDefault();
                  setCollapse(!collapse);
                }}
              >
                Roof Table
              </CButton>
              <CCollapse show={collapse}>
                <CCardBody>
                  <RoofInputTable
                    form={form}
                    setForm={setForm}
                    items={items}
                    isLoading={isLoading}
                    removeRoofFace={removeRoofFace}
                    handleEnter={handleEnter}
                  />
                </CCardBody>
              </CCollapse>
              {/*Vent Data Table */}
              <CButton
                className="btnStyle"
                onClick={(e) => {
                  e.preventDefault();
                  setCollapseVent(!collapseVent);
                }}
              >
                Vent Table
              </CButton>
              <CCollapse show={collapseVent}>
                <CCardBody>
                  <VentInputTable
                    form={form}
                    setForm={setForm}
                    handleEnter={handleEnter}
                  />
                </CCardBody>
              </CCollapse>
              {/*Plumbing Stack Input Table Data Table */}
              <CButton
                className="btnStyle"
                onClick={(e) => {
                  e.preventDefault();
                  setCollapsePlumbingStack(!collapsePlumbingStack);
                }}
              >
                Plumbing-Stack Table
              </CButton>
              <CCollapse show={collapsePlumbingStack}>
                <CCardBody>
                  <PlumbingStackInputTable
                    form={form}
                    setForm={setForm}
                    handleEnter={handleEnter}
                  />
                </CCardBody>
              </CCollapse>
              {/*Eaves Input Table Data Table */}
              <CButton
                className="btnStyle"
                onClick={(e) => {
                  e.preventDefault();
                  setCollapseEaves(!collapseEaves);
                }}
              >
                Eaves Table
              </CButton>
              <CCollapse show={collapseEaves}>
                <CCardBody>
                  <EavesInputTable
                    form={form}
                    setForm={setForm}
                    handleEnter={handleEnter}
                    items={items}
                  />
                </CCardBody>
              </CCollapse>
              {/*Professional Procedures Table */}
              <CButton
                className="btnStyle"
                onClick={(e) => {
                  e.preventDefault();
                  setCollapseProfessionalProcedures(
                    !collapseProfessionalProcedures
                  );
                }}
              >
                Professional Procedures
              </CButton>
              <CCollapse show={collapseProfessionalProcedures}>
                <CCardBody>
                  <ProfessionalProcedures form={form} setForm={setForm} />
                </CCardBody>
              </CCollapse>
              {/*Underlay Options Table */}
              <CButton
                className="btnStyle"
                onClick={(e) => {
                  e.preventDefault();
                  setCollapseUnderlayOptions(!collapseUnderlayOptions);
                }}
              >
                Underlay Options
              </CButton>
              <CCollapse show={collapseUnderlayOptions}>
                <CCardBody>
                  <UnderlayOptions form={form} setForm={setForm} />
                </CCardBody>
              </CCollapse>
              {/*Calculations Table */}
              <CButton
                className="btnStyle"
                onClick={(e) => {
                  e.preventDefault();
                  setCollapseCalculations(!collapseCalculations);
                }}
              >
                Calculations Table
              </CButton>
              <CCollapse show={collapseCalculations}>
                <CCardBody>
                  <CalculationsTable
                    pricesData={pricesData}
                    pitchFactor={form.pitch}
                    items={items}
                  />
                </CCardBody>
              </CCollapse>

              {/*Accessories Table */}
              <CButton
                className="btnStyle"
                onClick={(e) => {
                  e.preventDefault();
                  setCollapseAccessories(!collapseAccessories);
                }}
              >
                Accessories Table
              </CButton>
              <CCollapse show={collapseAccessories}>
                <CCardBody>
                  <AccessoriesTable form={form} />
                </CCardBody>
              </CCollapse>
              <div className="mt-1">
                <input
                  type="submit"
                  className="btn btn-success w-100 rounded-0"
                  value="Save"
                />
              </div>
            </CCard>
          </form>
        </>
      )}
    </div>
  );
}
