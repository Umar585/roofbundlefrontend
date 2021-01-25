import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// routes config
import routes from "../routes";

import { TheHeaderDropdown } from "./index";

//style scss
import "./style.scss";

//assets
import Logo from "../assets/img/Logo.png";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  //get current year
  const d = new Date();
  const currentDate = d.getFullYear();
  //get current month
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = new Date();
  const m = monthNames[currentMonth.getMonth()];

  const day = new Date();
  const newDay = day.getDate();

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/dashboard">
        <img src={Logo} alt="Logo" height="48" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        {/*<CInput
          type="search"
          id="nf-search"
          name="nf-search"
          placeholder="Search.."
          autoComplete="off"
  />*/}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/*<TheHeaderDropdownNotif />
        <TheHeaderDropdownMssg />*/}
        <TheHeaderDropdown />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="mfe-2 c-subheader-nav">
          {/* <CButtonGroup>
            <CButton>Day</CButton>
            <CButton>Week</CButton>
            <CButton>Month</CButton>
          </CButtonGroup>*/}
          <div style={{ border: "1px solid lightgray", marginLeft: "10px" }}>
            <CButton disabled>
              <CIcon name="cil-calendar" /> {`${m}, ${newDay}, ${currentDate}`}
            </CButton>
          </div>
        </div>
      </CSubheader>
    </CHeader>
  );
};
export default TheHeader;
