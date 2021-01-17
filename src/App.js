import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
//MainPages
import HomePage from "./Components/Home/HomePage";
import RoofReport from "./Components/RoofReport/RoofReport";
//Signup and Signin
import SignIn from "./Components/SIU/SignIn/SignIn";
import SignUp from "./Components/SIU/SignUp/SignUp";
//stripe-billing and personal form
import StripeForm from "./Components/RoofReport/Billing/StripeForm";
//Terms and conditions
import Terms from "./Components/TermsCond/Terms";
import Privacy from "./Components/TermsCond/Privacy";
//scroll to top
import ScrollToTop from "./Components/CustomComponent/ScrollToTop";
import TheSidebar from "./containers/TheSidebar";
import TheHeader from "./containers/TheHeader";
import TheContent from "./containers/TheContent";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
// Containers
//const TheLayout = React.lazy(() => import("./containers/TheLayout"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <ScrollToTop />
        <Switch>
          {window.location.pathname === "/" ||
          window.location.pathname === "/roofreport" ||
          window.location.pathname === "/terms" ||
          window.location.pathname === "/privacy" ||
          window.location.pathname === "/billing" ? null : (
            <>
              {/*<Route
                path="/dashboard"
                name="Home"
                render={(props) => <TheLayout {...props} />}
              />*/}
              <div className="c-app c-default-layout">
                <TheSidebar />
                <div className="c-wrapper">
                  <TheHeader />
                  <div className="c-body">
                    <TheContent />
                  </div>
                </div>
              </div>
            </>
          )}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/roofreport" component={RoofReport} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/billing" component={StripeForm} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
