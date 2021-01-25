import React from "react";
import { CButton, CCol, CContainer, CRow } from "@coreui/react";

const Page404 = ({ history }) => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center mx-auto">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-muted float-left">
                The page you are looking for was not found.
              </p>
            </div>
            <CButton
              className="btn btn-danger w-100"
              onClick={() => history.goBack()}
            >
              Return
            </CButton>
            {/*<CInputGroup className="input-prepend">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-magnifying-glass" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput size="16" type="text" placeholder="What are you looking for?" />
              <CInputGroupAppend>
                <CButton color="info">Search</CButton>
              </CInputGroupAppend>
  </CInputGroup>*/}
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Page404;
