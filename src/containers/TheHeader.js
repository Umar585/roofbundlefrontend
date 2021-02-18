import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHeader, CHeaderNav } from "@coreui/react";
import TheHeaderDropdown from "./TheHeaderDropdown";
import * as AiIcon from "react-icons/ai";

//style scss
import "./style.scss";

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

  return (
    <CHeader withSubheader>
      <div className="ml-3 ml-md-3 d-lg-none">
        <AiIcon.AiOutlineMenu
          style={{ color: "#fff", fontSize: "30px", marginTop: "14px" }}
          onClick={toggleSidebarMobile}
        />
      </div>
      <div className="ml-3 ml-3 d-md-down-none">
        <AiIcon.AiOutlineMenu
          style={{ color: "#fff", fontSize: "30px", marginTop: "14px" }}
          onClick={toggleSidebar}
        />
      </div>
      <CHeaderNav className="px-3">
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};
export default TheHeader;
