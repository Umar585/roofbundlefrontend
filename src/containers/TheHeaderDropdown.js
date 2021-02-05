import React from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { IconContext } from "react-icons";
import * as CgIcon from "react-icons/cg";

import "./style.scss";

const TheHeaderDropdown = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/signin");
  };
  return (
    <CDropdown inNav className="c-header-nav-items userLink" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <IconContext.Provider value={{ size: "35px", color: "#fff" }}>
            <CgIcon.CgProfile />
          </IconContext.Provider>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={logoutHandler}>
          {/*<CLink to="/signout">*/}
          Sign Out
          {/*</CLink>*/}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
