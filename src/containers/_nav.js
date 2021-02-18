import React from "react";
import * as RiIcon from "react-icons/ri";
import * as ImIcon from "react-icons/im";
import * as IoIcon from "react-icons/io";
import "./style.scss";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Home",
    icon: <RiIcon.RiHome2Fill className="c-sidebar-nav-icon" />,
    addLinkClass: "c-disabled",
    disabled: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Customer",
    to: "/",
    icon: <IoIcon.IoIosPerson className="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Tools",
    icon: <ImIcon.ImWrench className="c-sidebar-nav-icon" />,
    addLinkClass: "c-disabled",
    disabled: true,
  },
];

export default _nav;
