import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Customer = React.lazy(() => import("./views/customer/customer"));
const NewCustomer = React.lazy(() =>
  import("./views/customer/NewCustomer/NewCustomer")
);
/*
const Report = React.lazy(() => import("./views/RoofReport/RoofReport"));
const ReportBilling = React.lazy(() =>
  import("./views/RoofReport/Billing/StripeForm")
);*/
const Signout = () => {
  window.location.href = "http://localhost:3000";
};
const routes = [
  //{ path: "/dashboard", name: "Dashboard", component: Dashboard },

  { path: "/customer", exact: true, name: "Customer", component: Customer },
  {
    path: "/customer/new",
    name: "New Customer",
    component: NewCustomer,
  },
  /* { path: "/report", name: "Report", component: Report },
  { path: "/billing", name: "Billing", component: ReportBilling },*/
  { path: "/signout", component: Signout },
];

export default routes;
