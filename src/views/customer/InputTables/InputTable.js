import React, { useState, useEffect } from "react";
import Axios from "axios";
import { CCard, CCardBody } from "@coreui/react";
//Form
import Form from "./Form";
import BundlePrices from "./BundlePrices/Prices";
import PdfLayout from "./PdfFormat/PdfLayout";

export default function InputTable(props) {
  const [pricesData, setPricesData] = useState([]);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  //form
  const [form, setForm] = useState({
    tableArray: [],
    pitch: 0,
    stories: 0,
    roofTop: false,
    bin: false,
    newConst: false,
    lengthGrnd: 0,
    width: 0,
    eave: 0,
    gableGrnd: 0,
    valleyRM: 0,
    hipRM: 0,
    ridge: 0,
    wall: 0,
    chimney: 0,

    replace: 0,
    remove: 0,
    new: 0,
    exhaust: 0,
    basicRidge: 0,

    reSeal: 0,
    conversions: 0,
    oneMat: 0,
    twoMat: 0,
    threeMat: 0,
    fourMat: 0,

    adjOneStory: 0,
    adjTwoStory: 0,
    corners: 0,
    oneStoryDown: 0,
    twoStoryDown: 0,
    extraExtensions: 0,
    difficulty: 0,
    margin: 0,

    oneStoryPrice: 0,
    adjOneStoryPrice: 0,
    twoStoryPrice: 0,
    adjTwoStoryPrice: 0,
    cornersPrice: 0,
    oneStoryDownPrice: 0,
    twoStoryDownPrice: 0,
    extraExtensionsPrice: 0,
    difficultyPrice: 0,
    marginPrice: 0,

    strip: false,
    useNails: false,
    caulkVentFlashing: false,
    cleanEaves: false,
    cleanRemoveDebris: false,
    installSOverRV: false,
    installDEOverFToE: false,
    installIWEProtection: false,
    installIWVProtection: false,
    installUtoRoof: false,
    installPly: false,
    convertPEtoAbsP: false,
    convertPEtoAbsPMat: false,

    stripValue: 0,
    useNailsValue: 0,
    caulkVentFlashingValue: 0,
    cleanEavesValue: 0,
    cleanRemoveDebrisValue: 0,
    installSOverRVValue: 0,
    installDEOverFToEValue: 0,
    installIWEProtectionValue: 0,
    installIWVProtectionValue: 0,
    installUtoRoofValue: 0,
    installPlyValue: 0,
    convertPEtoAbsPValue: 0,

    installDEFtoE: false,
    installIWMembrane: false,
    installBStoRoof: false,
    installMetalVF: false,
    installHPHRCapping: false,
    reflashCFChimney: false,
    chimneyRemoval: false,
    roofDeckReplace: false,

    installDEFtoEHome: false,
    installIWMembraneHome: false,
    installBStoRoofHome: false,
    installMetalVFHome: false,
    installHPHRCappingHome: false,
    reflashCFChimneyHome: false,
    chimneyRemovalHome: false,
    roofDeckReplaceHome: false,

    installDEFtoEGarage: false,
    installIWMembraneGarage: false,
    installBStoRoofGarage: false,
    installMetalVFGrage: false,
    installHPHRCappingGarage: false,
    reflashCFChimneyGarage: false,
    chimneyRemovalGarage: false,
    roofDeckReplaceGarage: false,

    roofDeckAmount: 0,
    underlayWarranty: false,
    existingShingleColor: "",
    newShingleColor: "",
    underlayNotes: "",
  });

  useEffect(() => {
    Axios.get("/api/price").then((res) => {
      setPricesData(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("/api/price", pricesData)
      .then((res) => {
        //console.log(res);
        if (res.data === "Success") {
          setError(true);
          setMsg(true);
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      })
      .catch((e) => {
        if (e) {
          setError(true);
          setMsg(false);
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      });
  };
  return (
    <div>
      <CCard className="shadow">
        <CCardBody>
          <BundlePrices
            handleSubmit={handleSubmit}
            pricesData={pricesData}
            setPricesData={setPricesData}
            error={error}
            setError={setError}
            msg={msg}
            setMsg={setMsg}
          />
          <Form pricesData={pricesData} form={form} setForm={setForm} />
        </CCardBody>
      </CCard>
      <PdfLayout />
    </div>
  );
}
