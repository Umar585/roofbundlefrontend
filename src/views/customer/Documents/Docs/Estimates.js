import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Axios from "axios";
//component
import CustomCarousel from "./Components/CustomCarousel";
import CustomerCard from "./Components/CustomerCard";
//icons
import * as AiIcon from "react-icons/ai";
import QualityCard from "./Components/QualityCard";
import DescriptionCard from "./Components/DescriptionCard";
import DetailsCard from "./Components/DetailsCard";
import InfoCard from "./Components/InfoCard";

export default function Estimates() {
  const history = useHistory();
  const { id } = useParams();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
    Axios.post("/api/album/getalbum", { id, email, passToken })
      .then((res) => {
        let id = res.data.data[0]._id;

        Axios.post("/api/album/getalbumphotos", {
          id,
          email,
          passToken,
        })
          .then((res) => {
            setUploads(res.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, email, passToken, history]);

  //get user input tables
  // get prices
  //
  return (
    <div className="Estimates">
      <div>
        <div className="float-left">
          <div
            onClick={() => history.goBack()}
            style={{ color: "#3c4b64", cursor: "pointer" }}
          >
            <AiIcon.AiOutlineArrowLeft className="h3" />
          </div>
        </div>
        <div className="text-right">
          <h3>Estimates</h3>
        </div>
      </div>
      <CustomCarousel uploads={uploads} />
      <div style={{ marginTop: "-15px" }}>
        <CustomerCard />
      </div>
      <div style={{ marginTop: "-15px" }}>
        <QualityCard />
      </div>
      <div style={{ marginTop: "-15px" }}>
        <DescriptionCard />
      </div>
      <div style={{ marginTop: "-15px" }}>
        <DetailsCard />
      </div>
      <div style={{ marginTop: "-15px" }}>
        <InfoCard />
      </div>
    </div>
  );
}
