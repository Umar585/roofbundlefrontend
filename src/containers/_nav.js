import React from "react";
import CIcon from "@coreui/icons-react";
import "./style.scss";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  /* {
    _tag: "CSidebarNavTitle",
    _children: ["Theme"],
  },*/
  {
    _tag: "CSidebarNavItem",
    name: "Customer",
    to: "/customer",
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "light",
      text: "16",
    },
  },
];

export default _nav;