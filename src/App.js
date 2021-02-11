import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
//Signup and Signin
import SignIn from "./views/signin/SignIn";
import SignUp from "./views/signup/Signup";
import ForgotPass from "./views/ForgotPass/ForgotPass";
import ResetPassword from "./views/PasswordReset/ResetPass";
import VerifyEmail from "./views/VerifyEmail/VerifyEmail";
import Album from "./views/Photos/Album";
import Photos from "./views/Photos/Photos";
import Photo from "./views/Photos/SinglePhotos/LargeSinglePhoto";
import ScrollToTop from "./Components/CustomComponent/ScrollToTop";
import NotFound from "./views/pages/page404/Page404";
//Routing
import PrivateRouting from "./routing/PrivateRoute";

const Customer = React.lazy(() => import("./views/customer/customer"));
const NewCustomer = React.lazy(() =>
  import("./views/customer/NewCustomer/NewCustomer")
);
const CustomerFile = React.lazy(() =>
  import("./views/customer/CustomerFile/CustomerFile")
);
const CustomerDocument = React.lazy(() =>
  import("./views/customer/Documents/Documents")
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
function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <ScrollToTop />
        <Switch>
          <PrivateRouting exact path="/" component={Customer} />
          <PrivateRouting exact path="/new" component={NewCustomer} />
          <PrivateRouting exact path="/file/:id" component={CustomerFile} />
          <PrivateRouting
            exact
            path="/file/documents/:id"
            component={CustomerDocument}
          />
          <PrivateRouting
            exact
            path="/updatecustomer/:id"
            component={UpdateCustomer}
          />
          <PrivateRouting
            exact
            path="/customertables"
            component={InputTables}
          />
          <PrivateRouting exact path="/album/:id" component={Album} />
          <PrivateRouting exact path="/album/photos/:id" component={Photos} />
          <PrivateRouting
            exact
            path="/album/photos/photo/:id"
            component={Photo}
          />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/forgotpassword" exact component={ForgotPass} />
          <Route
            path="/passwordreset/:resetToken"
            exact
            component={ResetPassword}
          />
          <Route
            path="/verifyemail/:emailToken"
            exact
            component={VerifyEmail}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
