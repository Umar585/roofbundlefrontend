import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import { CContainer } from "@coreui/react";
//Signup and Signin
import SignIn from "./views/signin/SignIn";
import SignUp from "./views/signup/Signup";
import ForgotPass from "./views/ForgotPass/ForgotPass";
//Terms and conditions
/*import Terms from "./Components/TermsCond/Terms";
import Privacy from "./Components/TermsCond/Privacy";*/
//scroll to top
import ScrollToTop from "./Components/CustomComponent/ScrollToTop";
import TheSidebar from "./containers/TheSidebar";
import TheHeader from "./containers/TheHeader";
import TheFooter from "./containers/TheFooter";
import NotFound from "./views/pages/page404/Page404";

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
const InputTables = React.lazy(() =>
  import("./views/customer/InputTables/InputTable")
);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Signout = () => {
  window.location.href = "http://localhost:3000/signin";
};

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <ScrollToTop />
        <Switch>
          {window.location.pathname === "/" ||
          window.location.pathname === "/signout" ||
          window.location.pathname === "/new" ||
          window.location.pathname === "/file" ||
          window.location.pathname === "/updatecustomer" ||
          window.location.pathname === "/customertables" ? (
            <>
              <div className="c-app c-default-layout">
                <TheSidebar />
                <div className="c-wrapper">
                  <TheHeader />
                  <div className="c-body">
                    {/*<TheContent />*/}
                    <main className="c-main">
                      <CContainer fluid>
                        <Route path="/" exact={true} component={Customer} />
                        <Route path="/signout" component={Signout} />
                        <Route path="/new" component={NewCustomer} />
                        <Route path="/file" component={CustomerFile} />
                        <Route
                          path="/updatecustomer"
                          component={UpdateCustomer}
                        />
                        <Route path="/customertables" component={InputTables} />
                      </CContainer>
                    </main>
                  </div>
                  <TheFooter />
                </div>
              </div>
            </>
          ) : (
            <>
              <Route path="/signin" exact={true} component={SignIn} />
              <Route path="/signup" exact={true} component={SignUp} />
              <Route
                path="/forgotpassword"
                exact={true}
                component={ForgotPass}
              />
              {window.location.pathname === "/signin" ||
              window.location.pathname === "/signup" ||
              window.location.pathname === "/forgotpassword" ? null : (
                <Route path="*" component={NotFound} />
              )}
            </>
          )}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
