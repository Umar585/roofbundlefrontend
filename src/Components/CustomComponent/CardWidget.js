import React from "react";
import { CWidgetDropdown, CRow, CCol, CDropdown } from "@coreui/react";
//icons
import * as BsIcon from "react-icons/bs";
//chart
import ChartLineSimple from "../../views/charts/ChartLineSimple";

const CardWidget = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-info"
          header="39"
          text="Number of Estimates"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: "70px" }}
              backgroundColor="rgba(255,255,255,.2)"
              //dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="info"
              label="Estimates"
              labels="months"
            />
          }
        >
          <CDropdown>
            <p className="small">
              1.3% <BsIcon.BsArrowDown style={iconstyle} />
              than last year
            </p>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-warning"
          header="21"
          text="Number of Projects"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: "70px" }}
              backgroundColor="rgba(255,255,255,.2)"
              //dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="warning"
              label="Projects"
              labels="months"
            />
          }
        >
          <CDropdown>
            <p className="small">
              1.2% <BsIcon.BsArrowDown style={iconstyle} /> than last year
            </p>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="12" lg="4">
        <CWidgetDropdown
          color="gradient-danger"
          header="17"
          text="Projects Completed"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: "70px" }}
              backgroundColor="rgba(255,255,255,.2)"
              //dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="danger"
              label="Projects"
              labels="months"
            />
          }
        >
          <CDropdown>
            <p className="small">
              1.3% <BsIcon.BsArrowUp style={iconstyle} /> than last year
            </p>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  );
};

const iconstyle = {
  fontSize: "15px",
};

export default CardWidget;
