import React from "react";
import {
  CButton,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
} from "@coreui/react";
//tabs Content
import CustomerTab from "./CustomerTab";
import NewCustomersTab from "./NewCustomerTab";
import EstimatesTab from "./EstimatesTab";
import ProjectTab from "./ProjectTab";
import CompletedTab from "./CompletedTab";
//scss
import "./customer.scss";

const customer = () => {
  const handleNewCust = () => {
    window.location.href = "/customer/new";
  };
  return (
    <>
      <CButton
        className="btn text-white"
        style={{ backgroundColor: "#e60029" }}
        onClick={handleNewCust}
      >
        New Customer
      </CButton>
      <div style={{ marginTop: "50px" }}>
        <CTabs>
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink>Customers</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>New Customers</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>Estimates</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>Projects</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>Complete</CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent className="mt-4">
            <CTabPane>
              <CustomerTab />
            </CTabPane>
            <CTabPane>
              <NewCustomersTab />
            </CTabPane>
            <CTabPane>
              <EstimatesTab />
            </CTabPane>
            <CTabPane>
              <ProjectTab />
            </CTabPane>
            <CTabPane>
              <CompletedTab />
            </CTabPane>
          </CTabContent>
        </CTabs>
      </div>
    </>
  );
};
export default customer;
