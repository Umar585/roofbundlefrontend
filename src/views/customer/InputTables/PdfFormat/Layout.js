import React from "react";
import Header from "./Components/Header";
import CustHeader from "./Components/CustHeader";
import Body from "./Components/Body";

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="card shadow">
        <Header />
        <CustHeader />
        <Body />
      </div>
    </div>
  );
}
