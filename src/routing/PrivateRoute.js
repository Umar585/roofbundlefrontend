import React from "react";
import { Redirect, Route } from "react-router-dom";
import TheSidebar from "../containers/TheSidebar";
import TheHeader from "../containers/TheHeader";
import TheFooter from "../containers/TheFooter";
import { CContainer } from "@coreui/react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <div className="c-app c-default-layout">
            <TheSidebar />
            <div className="c-wrapper">
              <TheHeader />
              <div className="c-body">
                <main className="c-main">
                  <CContainer fluid>
                    <Component {...props} />
                  </CContainer>
                </main>
              </div>
              <TheFooter />
            </div>
          </div>
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
