import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Customer = React.lazy(() => import("./views/customer/customer"));
const Signout = () => {
  window.location.href = "http://localhost:3000";
};
const routes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/customer", name: "Customer", component: Customer },
  { path: "/signout", component: Signout },
];

export default routes;
