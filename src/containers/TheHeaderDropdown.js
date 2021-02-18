import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { IconContext } from "react-icons";
import * as CgIcon from "react-icons/cg";

import "./style.scss";
import axios from "axios";

const TheHeaderDropdown = () => {
  const history = useHistory();
  const [name, setName] = useState([]);
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("email");
    localStorage.removeItem("passToken");
    history.push("/signin");
  };

  useEffect(() => {
    let email = localStorage.getItem("email");
    let passToken = localStorage.getItem("passToken");
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
    axios
      .post("/api/getuserinfo", { email, passToken })
      .then((res) => {
        setName(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <CDropdown inNav className="c-header-nav-items userLink" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <span
          style={{
            color: "#fff",
            maxWidth: "150px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {name.fname} {name.lname}
        </span>
        <div className="c-avatar ml-1">
          <IconContext.Provider value={{ size: "35px", color: "#fff" }}>
            <CgIcon.CgProfile />
          </IconContext.Provider>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={logoutHandler}>Sign Out</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
