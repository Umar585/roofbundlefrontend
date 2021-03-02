import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
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

export default function ChangeOrder() {
  const history = useHistory();
  const { id } = useParams();
  const email = localStorage.getItem("email");
  const passToken = localStorage.getItem("passToken");
  const [uploads, setUploads] = useState([]);
  const [roof, setRoof] = useState([]);
  const [eave, setEave] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/signin");
    }
    Axios.post("/api/album/getalbum", { id, email, passToken })
      .then((res) => {
        let id = res.data.data[4]._id;

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

    Axios.post("/api/measure/addallmeasure", { id, email, passToken })
      .then((res) => {
        setRoof(res.data.roof);
        setEave(res.data.eave);
        setSelection(res.data.selection);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, email, passToken, history]);

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
          <h3>Change Order</h3>
        </div>
      </div>
      <div style={{ marginBottom: "25px" }}>
        <CustomCarousel uploads={uploads} />
      </div>
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
        <DetailsCard selection={selection} />
      </div>
      <div style={{ marginTop: "-15px" }}>
        <InfoCard />
      </div>
    </div>
  );
}
