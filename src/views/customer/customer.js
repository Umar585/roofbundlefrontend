import React from "react";
import {
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
} from "@coreui/react";
//tabs Content
import CustomerTab from "./Tabs/CustomerTab";
import NewCustomersTab from "./Tabs/NewCustomerTab";
import EstimatesTab from "./Tabs/EstimatesTab";
import ProjectTab from "./Tabs/ProjectTab";
import CompletedTab from "./Tabs/CompletedTab";
//scss
import "./customer.scss";

const customer = () => {
  const handleNewCust = () => {
    window.location.href = "/new";
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
      <div style={{ marginTop: "50px" }} className="test">
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
