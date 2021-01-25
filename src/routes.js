import React from "react";

//const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Customer = React.lazy(() => import("./views/customer/customer"));
const NewCustomer = React.lazy(() =>
  import("./views/customer/NewCustomer/NewCustomer")
);
const CustomerFile = React.lazy(() =>
  import("./views/customer/CustomerFile/CustomerFile")
);
const UpdateCustomer = React.lazy(() =>
  import("./views/customer/UpdateCustomer/UpdatedCustomer")
);
const CustomerTables = React.lazy(() =>
  import("./views/customer/InputTables/InputTable")
);
//const NotFound = React.lazy(() => import("./views/pages/page404/Page404"));

const routes = [
  //{ path: "/dashboard", name: "Dashboard", component: Dashboard },

  { path: "/", exact: true, name: "Customer", component: Customer },
  {
    path: "/new",
    name: "New Customer",
    component: NewCustomer,
  },
  {
    path: "/file",
    name: "Customer File",
    component: CustomerFile,
  },
  {
    path: "/updatecustomer",
    name: "Update Customer",
    component: UpdateCustomer,
  },
  {
    path: "/customertables",
    name: "Customer Table",
    component: CustomerTables,
  },
  //{ path: "", exact: true, component: NotFound },
];

export default routes;
