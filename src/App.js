import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
//main-Home
import HomePage from "./Components/Home/HomePage";
//stripe-billing and personal form
import RoofReport from "./Components/RoofReport/RoofReport";
import StripeForm from "./Components/RoofReport/Billing/StripeForm";

//scroll to top
import ScrollToTop from "./Components/CustomComponent/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/billing" component={StripeForm} />
        <Route path="/roofreport" component={RoofReport} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
