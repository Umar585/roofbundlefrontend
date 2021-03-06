import React, { lazy, useEffect, useState } from "react";
import {
  CButtonGroup,
  CCard,
  CCardBody,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CCol,
  CRow,
} from "@coreui/react";
import Axios from "axios";
import MainChart from "../../Components/CustomComponent/MainChart";
import ToDoCard from "../../Components/CustomComponent/ToDoCard";
import WeatherCard from "../../Components/CustomComponent/Weather";
//style
import "./dash.scss";

const CardWidget = lazy(() =>
  import("../../Components/CustomComponent/CardWidget")
);

const Dashboard = () => {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState({
    lat: "",
    long: "",
    city: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  function fetchLocation() {
    Axios.get("https://geolocation-db.com/json/")
      .then((res) => {
        setLocation({
          ...location,
          lat: res.data.latitude,
          long: res.data.longitude,
          city: res.data.city,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchLocation();
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      <CardWidget />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="projects" className="card-title mb-0">
                Total Projects
              </h4>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButtonGroup className="float-right mr-3">
                <CDropdown>
                  <CDropdownToggle caret color="white">
                    Last 12 Months
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Last 6 Months</CDropdownItem>
                    <CDropdownItem>Last 3 Months</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart style={{ height: "300px", marginTop: "40px" }} />
        </CCardBody>
      </CCard>

      <CRow>
        <CCol xs="12" sm="6" lg="4">
          <div className="toDoList">
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
          </div>
        </CCol>
        <CCol xs="12" sm="6" lg="4">
          <CCard className="shadow">
            <iframe
              title="Test Map"
              className="col-xs-12"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164632.82123650867!2d-97.29230683761371!3d49.85395901788712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fbf91a2b11%3A0x2b2a1afac6b9ca64!2sWinnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1610745339258!5m2!1sen!2sca"
              frameBorder="0"
              style={{ border: "0px", height: "400px", width: "100%" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </CCard>
          {isLoading ? (
            <h3 className="text-center">Loading ...</h3>
          ) : (
            <WeatherCard
              lat={location.lat}
              lon={location.long}
              city={location.city}
            />
          )}
        </CCol>
        <CCol xs="12" sm="12" lg="4">
          <div className="toDoList">
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
