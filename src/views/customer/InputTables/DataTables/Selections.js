import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { CCard, CCollapse } from "@coreui/react";
import jsonData from "./data.json";

export default function Selections() {
  const { id } = useParams();
  const [collapse, setCollapse] = useState(false);
  const [form, setForm] = useState({
    oneLayer_remove: true,
    twoLayer_remove: false,

    ground_delivery: true,
    rooftop_delivery: false,

    roof_bin: true,
    away_bin: false,

    osb_decking: true,
    plywood_decking: false,
    fir_decking: false,

    brand_roof: "",
    shingle_roof: "",
    color_roof: "",
    capping_roof: "",
    starter_brand: "",
    starter_shingle: "",
    hr_brand: "",
    hr_shingle: "",

    ice_water_brand: "",
    ice_water_protection: "",
    underlay_brand: "",
    underlay_protection: "",

    drip_edge_flashing: "",
    wall_roof_flashing: "",
    valley_flashing: "",
    chimney_flashing: "",

    metal_chimney: true,
    concrete_chimney: false,
    brick_chimney: false,

    Replace_ventilation: "",
    remove_ventilation: "",
    new_ventilation: "",
    ridge_ventilation: "",

    reSeal_BPS: "",
    onemat_BPS: "",
    twomat_BPS: "",
    threemat_BPS: "",
    fourmat_BPS: "",
    convert_BPS: "",

    satellite_reinstall: true,
    solar_reinstall: false,

    work_warranty: true,
    registered_warranty: false,
  });
  const [brandShingles, setBrandShingles] = useState([]);
  const [colorShingles, setColorShingles] = useState([]);
  const [cappingShingles, setCappingShingles] = useState([]);
  const [starterShingles, setStarterShingles] = useState([]);
  const [hrShingles, setHrShingles] = useState([]);
  const [underlayProtection, setUnderlayProtection] = useState([]);
  const [iceWaterProtection, setIceWaterProtection] = useState([]);
  const [errs, setErrs] = useState([]);

  const handleForm = () => {
    let isValid = true;
    if (
      form.brand_roof === "" &&
      form.shingle_roof === "" &&
      form.color_roof === "" &&
      form.capping_roof === "" &&
      form.starter_brand === "" &&
      form.starter_shingle === "" &&
      form.hr_brand === "" &&
      form.hr_shingle === "" &&
      form.ice_water_brand === "" &&
      form.ice_water_protection === "" &&
      form.underlay_brand === "" &&
      form.underlay_protection === "" &&
      form.drip_edge_flashing === "" &&
      form.wall_roof_flashing === "" &&
      form.valley_flashing === "" &&
      form.chimney_flashing === "" &&
      form.Replace_ventilation === "" &&
      form.remove_ventilation === "" &&
      form.new_ventilation === "" &&
      form.ridge_ventilation === "" &&
      form.reSeal_BPS === "" &&
      form.onemat_BPS === "" &&
      form.twomat_BPS === "" &&
      form.threemat_BPS === "" &&
      form.fourmat_BPS === "" &&
      form.convert_BPS === ""
    ) {
      isValid = false;
      setErrs({ ...errs, formErr: true });
      setTimeout(() => {
        setErrs({ ...errs, formErr: false });
      }, 4000);
    } else if (form.brand_roof === "") {
      setErrs({ errs, brand_roof: true });
      isValid = false;
    } else if (form.shingle_roof === "") {
      setErrs({ errs, shingle_roof: true });
      isValid = false;
    } else if (form.color_roof === "") {
      setErrs({ errs, color_roof: true });
      isValid = false;
    } else if (form.capping_roof === "") {
      setErrs({ errs, capping_roof: true });
      isValid = false;
    } else if (form.starter_brand === "") {
      setErrs({ errs, starter_brand: true });
      isValid = false;
    } else if (form.starter_shingle === "") {
      setErrs({ errs, starter_shingle: true });
      isValid = false;
    } else if (form.hr_brand === "") {
      setErrs({ errs, hr_brand: true });
      isValid = false;
    } else if (form.hr_shingle === "") {
      setErrs({ errs, hr_shingle: true });
      isValid = false;
    } else if (form.ice_water_brand === "") {
      setErrs({ errs, ice_water_brand: true });
      isValid = false;
    } else if (form.ice_water_protection === "") {
      setErrs({ errs, ice_water_protection: true });
      isValid = false;
    } else if (form.underlay_brand === "") {
      setErrs({ errs, underlay_brand: true });
      isValid = false;
    } else if (form.underlay_protection === "") {
      setErrs({ errs, underlay_protection: true });
      isValid = false;
    } else if (form.drip_edge_flashing === "") {
      setErrs({ errs, drip_edge_flashing: true });
      isValid = false;
    } else if (form.wall_roof_flashing === "") {
      setErrs({ errs, wall_roof_flashing: true });
      isValid = false;
    } else if (form.valley_flashing === "") {
      setErrs({ errs, valley_flashing: true });
      isValid = false;
    } else if (form.chimney_flashing === "") {
      setErrs({ errs, chimney_flashing: true });
      isValid = false;
    } else if (form.Replace_ventilation === "") {
      setErrs({ errs, Replace_ventilation: true });
      isValid = false;
    } else if (form.remove_ventilation === "") {
      setErrs({ errs, remove_ventilation: true });
      isValid = false;
    } else if (form.new_ventilation === "") {
      setErrs({ errs, new_ventilation: true });
      isValid = false;
    } else if (form.ridge_ventilation === "") {
      setErrs({ errs, ridge_ventilation: true });
      isValid = false;
    } else if (form.reSeal_BPS === "") {
      setErrs({ errs, reSeal_BPS: true });
      isValid = false;
    } else if (form.onemat_BPS === "") {
      setErrs({ errs, onemat_BPS: true });
      isValid = false;
    } else if (form.twomat_BPS === "") {
      setErrs({ errs, twomat_BPS: true });
      isValid = false;
    } else if (form.threemat_BPS === "") {
      setErrs({ errs, threemat_BPS: true });
      isValid = false;
    } else if (form.fourmat_BPS === "") {
      setErrs({ errs, fourmat_BPS: true });
      isValid = false;
    } else if (form.convert_BPS === "") {
      setErrs({ errs, convert_BPS: true });
      isValid = false;
    } else {
      setErrs(false);
      isValid = true;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = handleForm();
    if (isValid) {
      let email = localStorage.getItem("email");
      let passToken = localStorage.getItem("passToken");
      Axios.post("/api/measure/addselectionsmeasure", {
        id,
        email,
        passToken,
        form,
      })
        .then((res) => {
          console.log(form);
          setErrs({ errs, success: true });
          setTimeout(() => {
            setErrs({ errs, success: false });
          }, 4000);
        })
        .catch((err) => {
          setErrs({ errs, failed: true });
          setTimeout(() => {
            setErrs({ errs, failed: false });
          }, 4000);
        });
    }
  };

  useEffect(() => {
    let brands;
    if (form.brand_roof !== "") {
      //set Shingle
      brands = jsonData.brand.filter((x) => x.name.includes(form.brand_roof));
      setBrandShingles(brands[0].shingles);

      //set Capping
      brands = jsonData.brand.filter((x) => x.name.includes(form.brand_roof));
      setCappingShingles(brands[0].cappings);
    }

    //set Shingle Color
    if (form.shingle_roof !== "" && form.brand_roof !== "") {
      brands = jsonData.brand.filter((x) => x.name.includes(form.brand_roof));
      const shingle = brands[0].shingles.filter((x) =>
        x.name.includes(form.shingle_roof)
      );
      setColorShingles(shingle[0].colors);
    }

    //set starter Shingle
    if (form.starter_brand !== "") {
      //set Shingle
      brands = jsonData.starterShingle.filter((x) =>
        x.name.includes(form.starter_brand)
      );
      setStarterShingles(brands[0].shingles);
    }

    //set Hip & Ridge Shingle
    if (form.hr_brand !== "") {
      //set Hip & Ridge Shingle
      brands = jsonData.hrShingle.filter((x) => x.name.includes(form.hr_brand));
      setHrShingles(brands[0].shingles);
    }

    //set Hip & Ridge Shingle
    if (form.underlay_brand !== "") {
      //set Hip & Ridge Shingle
      brands = jsonData.underlayments.filter((x) =>
        x.name.includes(form.underlay_brand)
      );
      setUnderlayProtection(brands[0].underlay);
    }

    //set Ice & Water Protection
    if (form.ice_water_brand !== "") {
      //set Hip & Ridge Shingle
      brands = jsonData.leak_barriers.filter((x) =>
        x.name.includes(form.ice_water_brand)
      );
      setIceWaterProtection(brands[0].leak_barrier);
    }
  }, [
    form,
    brandShingles,
    colorShingles,
    cappingShingles,
    starterShingles,
    hrShingles,
    underlayProtection,
    iceWaterProtection,
  ]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h6
          className="customersTable_sliderBtn border w-100 text-center p-1"
          onClick={(e) => {
            e.preventDefault();
            setCollapse(!collapse);
          }}
        >
          Selections
        </h6>
        <CCollapse show={collapse}>
          <CCard className="p-2">
            <div className="row no-gutters">
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Remove</h5>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Asphalt Shingles</h6>
              </div>
              <div className="col-6 gb-pr">
                <CustomCheckBoxButtom
                  label="1 Layer"
                  checked={form.oneLayer_remove}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      oneLayer_remove: e.target.checked,
                      twoLayer_remove: false,
                    })
                  }
                />
              </div>
              <div className="col-6 gb-pl">
                <CustomCheckBoxButtom
                  label="2 Layer"
                  checked={form.twoLayer_remove}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      twoLayer_remove: e.target.checked,
                      oneLayer_remove: false,
                    })
                  }
                />
              </div>
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Delivery</h5>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Material Delivery</h6>
              </div>
              <div className="col-6 gb-pr">
                <CustomCheckBoxButtom
                  label="Ground Drop"
                  checked={form.ground_delivery}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ground_delivery: e.target.checked,
                      rooftop_delivery: false,
                    })
                  }
                />
              </div>
              <div className="col-6 gb-pl">
                <CustomCheckBoxButtom
                  label="Rooftop"
                  checked={form.rooftop_delivery}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      rooftop_delivery: e.target.checked,
                      ground_delivery: false,
                    })
                  }
                />
              </div>
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Garbage Bin</h5>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Bin Placement</h6>
              </div>
              <div className="col-6 gb-pr  text-center">
                <CustomCheckBoxButtom
                  label="Near Roof"
                  checked={form.roof_bin}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      roof_bin: e.target.checked,
                      away_bin: false,
                    })
                  }
                />
                <p className="p3" style={{ marginTop: "-8px" }}>
                  Little Clean Up Needed
                </p>
              </div>
              <div className="col-6  gb-pl text-center">
                <CustomCheckBoxButtom
                  label="Away From Roof"
                  checked={form.away_bin}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      away_bin: e.target.checked,
                      roof_bin: false,
                    })
                  }
                />
                <p className="p3" style={{ marginTop: "-8px" }}>
                  Lots Of Clean Up Needed
                </p>
              </div>
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Decking</h5>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Roof Decking</h6>
              </div>
              <div className="col-4" style={{ paddingRight: "2px" }}>
                <CustomCheckBoxButtom
                  label="OSB"
                  checked={form.osb_decking}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      osb_decking: e.target.checked,
                      plywood_decking: false,
                      fir_decking: false,
                    })
                  }
                />
              </div>
              <div
                className="col-4"
                style={{ paddingRight: "2px", paddingLeft: "2px" }}
              >
                <CustomCheckBoxButtom
                  label="Plywood"
                  checked={form.plywood_decking}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      plywood_decking: e.target.checked,
                      osb_decking: false,
                      fir_decking: false,
                    })
                  }
                />
              </div>
              <div className="col-4" style={{ paddingLeft: "2px" }}>
                <CustomCheckBoxButtom
                  label="Fir"
                  checked={form.fir_decking}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      fir_decking: e.target.checked,
                      osb_decking: false,
                      plywood_decking: false,
                    })
                  }
                />
              </div>
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Roof Selections</h5>
              </div>
              <div className="col-12 mt-2">
                <h6>Shingles</h6>
              </div>
              <div className="col-6 gb-pr mb-1">
                <select
                  className="form-control"
                  id="brand"
                  name="brand"
                  style={errs.brand_roof ? inputErrorStyle : inputStyle}
                  value={form.brand_roof}
                  onChange={(e) => {
                    setColorShingles([]);
                    setBrandShingles([]);
                    setColorShingles([]);
                    setForm({
                      ...form,
                      brand_roof: e.target.value,
                      shingle_roof: "",
                    });
                  }}
                >
                  <option value="">Brand</option>
                  {jsonData.brand.map((n, i) => {
                    return (
                      <option key={i} value={n.name}>
                        {n.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-6 mb-1  gb-pl">
                <select
                  className="form-control"
                  id="shingle_roof"
                  name="shingle_roof"
                  value={form.shingle_roof}
                  style={errs.shingle_roof ? inputErrorStyle : inputStyle}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      shingle_roof: e.target.value,
                    });
                    setColorShingles([]);
                  }}
                >
                  <option value="">Shingle</option>
                  {form.brand_roof
                    ? brandShingles.map((n, i) => {
                        return (
                          <option key={i} value={n.name}>
                            {n.name}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
              <div className="col-6 gb-pr mb-1">
                <select
                  className="form-control"
                  id="color_roof"
                  name="color_roof"
                  style={errs.color_roof ? inputErrorStyle : inputStyle}
                  value={form.color_roof}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      color_roof: e.target.value,
                    })
                  }
                >
                  <option value="">Color</option>
                  {form.brand_roof
                    ? colorShingles.map((n, i) => {
                        return (
                          <option key={i} value={n.color}>
                            {n.color}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
              <div className="col-6 gb-pl">
                <select
                  className="form-control"
                  id="capping_roof"
                  name="capping_roof"
                  style={errs.capping_roof ? inputErrorStyle : inputStyle}
                  value={form.capping_roof}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      capping_roof: e.target.value,
                    })
                  }
                >
                  <option value="">Capping</option>
                  {form.brand_roof
                    ? cappingShingles.map((n, i) => {
                        return <option key={i}>{n.capping}</option>;
                      })
                    : null}
                </select>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Starter Shingles</h6>
              </div>
              <div className="col-6 gb-pr">
                <select
                  className="form-control"
                  id="starter_brand"
                  name="starter_brand"
                  style={errs.starter_brand ? inputErrorStyle : inputStyle}
                  value={form.starter_brand}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      starter_brand: e.target.value,
                    })
                  }
                >
                  <option value="">Brand</option>
                  {jsonData.starterShingle.map((n, i) => {
                    return (
                      <option key={i} value={n.name}>
                        {n.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-6 gb-pr">
                <select
                  className="form-control"
                  id="starter_shingle"
                  name="starter_shingle"
                  style={errs.starter_shingle ? inputErrorStyle : inputStyle}
                  value={form.starter_shingle}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      starter_shingle: e.target.value,
                    })
                  }
                >
                  <option value="">Shingle</option>
                  {form.starter_brand
                    ? starterShingles.map((n, i) => {
                        return (
                          <option key={i} value={n.name}>
                            {n.name}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Hip & Ridge Shingles</h6>
              </div>
              <div className="col-6 gb-pr">
                <select
                  className="form-control"
                  id="hr_brand"
                  name="hr_brand"
                  style={errs.hr_brand ? inputErrorStyle : inputStyle}
                  value={form.hr_brand}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      hr_brand: e.target.value,
                    })
                  }
                >
                  <option value="">Brand</option>
                  {jsonData.hrShingle.map((n, i) => {
                    return (
                      <option key={i} value={n.name}>
                        {n.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-6 gb-pr mb-1">
                <select
                  className="form-control"
                  id="hr_shingle"
                  name="hr_shingle"
                  style={errs.hr_shingle ? inputErrorStyle : inputStyle}
                  value={form.hr_shingle}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      hr_shingle: e.target.value,
                    })
                  }
                >
                  <option value="">Shingle</option>
                  {form.hr_brand
                    ? hrShingles.map((n, i) => {
                        return (
                          <option key={i} value={n.name}>
                            {n.name}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Protection</h5>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Ice & Water Protection</h6>
              </div>
              <div className="col-6 gb-pr">
                <select
                  className="form-control"
                  id="ice_water_brand"
                  name="ice_water_brand"
                  style={errs.ice_water_brand ? inputErrorStyle : inputStyle}
                  value={form.ice_water_brand}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ice_water_brand: e.target.value,
                    })
                  }
                >
                  <option value="">Brand</option>
                  {jsonData.leak_barriers.map((n, i) => {
                    return (
                      <option key={i} value={n.name}>
                        {n.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-6 gb-pr">
                <select
                  className="form-control"
                  id="ice_water_protection"
                  name="ice_water_protection"
                  style={
                    errs.ice_water_protection ? inputErrorStyle : inputStyle
                  }
                  value={form.ice_water_protection}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ice_water_protection: e.target.value,
                    })
                  }
                >
                  <option value="">Protection</option>
                  {form.ice_water_brand
                    ? iceWaterProtection.map((n, i) => {
                        return (
                          <option key={i} value={n.name}>
                            {n.name}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Underlayment</h6>
              </div>
              <div className="col-6 gb-pr">
                <select
                  className="form-control"
                  id="underlay_brand"
                  name="underlay_brand"
                  style={errs.underlay_brand ? inputErrorStyle : inputStyle}
                  value={form.underlay_brand}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      underlay_brand: e.target.value,
                    })
                  }
                >
                  <option value="">Brand</option>
                  {jsonData.underlayments.map((n, i) => {
                    return (
                      <option key={i} value={n.name}>
                        {n.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-6 gb-pr">
                <select
                  className="form-control"
                  id="underlay_protection"
                  name="underlay_protection"
                  style={
                    errs.underlay_protection ? inputErrorStyle : inputStyle
                  }
                  value={form.underlay_protection}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      underlay_protection: e.target.value,
                    })
                  }
                >
                  <option value="">Underlay</option>
                  {form.underlay_brand
                    ? underlayProtection.map((n, i) => {
                        return (
                          <option key={i} value={n.name}>
                            {n.name}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Flashing</h6>
              </div>
              <div className="col-6 gb-pr mb-1">
                <select
                  className="form-control"
                  id="drip_edge_flashing"
                  name="drip_edge_flashing"
                  style={errs.drip_edge_flashing ? inputErrorStyle : inputStyle}
                  value={form.drip_edge_flashing}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      drip_edge_flashing: e.target.value,
                    })
                  }
                >
                  <option value="">Drip Edge</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-6 mb-1 gb-pl">
                <select
                  className="form-control"
                  id="wall_roof_flashing"
                  name="wall_roof_flashing"
                  style={errs.wall_roof_flashing ? inputErrorStyle : inputStyle}
                  value={form.wall_roof_flashing}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      wall_roof_flashing: e.target.value,
                    })
                  }
                >
                  <option value="">Wall/Roof</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-6 mb-1 gb-pr">
                <select
                  className="form-control"
                  id="valley_flashing"
                  name="valley_flashing"
                  style={errs.valley_flashing ? inputErrorStyle : inputStyle}
                  value={form.valley_flashing}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      valley_flashing: e.target.value,
                    })
                  }
                >
                  <option value="">Valley</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-6 gb-pl">
                <select
                  className="form-control"
                  id="chimney_flashing"
                  name="chimney_flashing"
                  style={errs.chimney_flashing ? inputErrorStyle : inputStyle}
                  value={form.chimney_flashing}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      chimney_flashing: e.target.value,
                    })
                  }
                >
                  <option value="">Chimney</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Chimney</h6>
              </div>
              <div className="col-4 gb-pr">
                <CustomCheckBoxButtom
                  label="Metal"
                  checked={form.metal_chimney}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      metal_chimney: e.target.checked,
                      concrete_chimney: false,
                      brick_chimney: false,
                    })
                  }
                />
              </div>
              <div className="col-4 gb-pr gb-pl">
                <CustomCheckBoxButtom
                  label="Concrete"
                  checked={form.concrete_chimney}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      concrete_chimney: e.target.checked,
                      metal_chimney: false,
                      brick_chimney: false,
                    })
                  }
                />
              </div>
              <div className="col-4 gb-pl">
                <CustomCheckBoxButtom
                  label="Brick"
                  checked={form.brick_chimney}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      brick_chimney: e.target.checked,
                      metal_chimney: false,
                      concrete_chimney: false,
                    })
                  }
                />
              </div>
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Ventilation</h5>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Basic Ventilation</h6>
              </div>
              <div className="col-6 gb-pr mb-1">
                <select
                  className="form-control"
                  id="Replace_ventilation"
                  name="Replace_ventilation"
                  style={
                    errs.Replace_ventilation ? inputErrorStyle : inputStyle
                  }
                  value={form.Replace_ventilation}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      Replace_ventilation: e.target.value,
                    })
                  }
                >
                  <option value="">Replace</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-6 mb-1 gb-pl">
                <select
                  className="form-control"
                  id="remove_ventilation"
                  name="remove_ventilation"
                  style={errs.remove_ventilation ? inputErrorStyle : inputStyle}
                  value={form.remove_ventilation}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      remove_ventilation: e.target.value,
                    })
                  }
                >
                  <option value="">Remove</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-6 gb-pr">
                <select
                  className="form-control"
                  id="new_ventilation"
                  name="new_ventilation"
                  style={errs.new_ventilation ? inputErrorStyle : inputStyle}
                  value={form.new_ventilation}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      new_ventilation: e.target.value,
                    })
                  }
                >
                  <option value="">New</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Upgrade Ventilation</h6>
              </div>
              <div className="col-6 gb-pr mb-1">
                <select
                  className="form-control"
                  id="ridge_ventilation"
                  name="ridge_ventilation"
                  style={errs.ridge_ventilation ? inputErrorStyle : inputStyle}
                  value={form.ridge_ventilation}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ridge_ventilation: e.target.value,
                    })
                  }
                >
                  <option value="">Ridge</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Plumbing Stacks</h5>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Basic Plumbing Stacks</h6>
              </div>
              <div className="col-6 gb-pr mb-1">
                <select
                  className="form-control"
                  id="reSeal_BPS"
                  name="reSeal_BPS"
                  style={errs.reSeal_BPS ? inputErrorStyle : inputStyle}
                  value={form.reSeal_BPS}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      reSeal_BPS: e.target.value,
                    })
                  }
                >
                  <option value="">Re-Seal</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-6 mb-1 gb-pl">
                <select
                  className="form-control"
                  id="onemat_BPS"
                  name="onemat_BPS"
                  style={errs.onemat_BPS ? inputErrorStyle : inputStyle}
                  value={form.onemat_BPS}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      onemat_BPS: e.target.value,
                    })
                  }
                >
                  <option value="">1.5" Mat</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-6 gb-pr mb-1">
                <select
                  className="form-control"
                  id="twomat_BPS"
                  name="twomat_BPS"
                  style={errs.twomat_BPS ? inputErrorStyle : inputStyle}
                  value={form.twomat_BPS}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      twomat_BPS: e.target.value,
                    })
                  }
                >
                  <option value="">2" Mat</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-6 mb-1 gb-pl">
                <select
                  className="form-control"
                  id="threemat_BPS"
                  name="threemat_BPS"
                  style={errs.threemat_BPS ? inputErrorStyle : inputStyle}
                  value={form.threemat_BPS}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      threemat_BPS: e.target.value,
                    })
                  }
                >
                  <option value="">3" Mat</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-6 gb-pr">
                <select
                  className="form-control"
                  id="fourmat_BPS"
                  name="fourmat_BPS"
                  style={errs.fourmat_BPS ? inputErrorStyle : inputStyle}
                  value={form.fourmat_BPS}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      fourmat_BPS: e.target.value,
                    })
                  }
                >
                  <option value="">4" Mat</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-12" style={subHeader}>
                <h6>Upgrade Plumbing Stacks</h6>
              </div>
              <div className="col-6 gb-pr mb-1">
                <select
                  className="form-control"
                  id="convert_BPS"
                  name="convert_BPS"
                  style={errs.convert_BPS ? inputErrorStyle : inputStyle}
                  value={form.convert_BPS}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      convert_BPS: e.target.value,
                    })
                  }
                >
                  <option value="">Convert</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-12 mt-2 text-center pt-2" style={headerStyle}>
                <h5>Additional</h5>
              </div>
              <div className="col-12 " style={subHeader}>
                <h6>Re-Install</h6>
              </div>
              <div className="col-6 gb-pr">
                <CustomCheckBoxButtom
                  label="Satellite Dish"
                  checked={form.satellite_reinstall}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      satellite_reinstall: e.target.checked,
                      solar_reinstall: false,
                    })
                  }
                />
              </div>
              <div className="col-6 gb-pl">
                <CustomCheckBoxButtom
                  label="Solar Panels"
                  checked={form.solar_reinstall}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      solar_reinstall: e.target.checked,
                      satellite_reinstall: false,
                    })
                  }
                />
              </div>
              <div className="col-12">
                <h6>Warranty</h6>
              </div>
              <div className="col-6 gb-pr">
                <CustomCheckBoxButtom
                  label="Workman Ship"
                  checked={form.work_warranty}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      work_warranty: e.target.checked,
                      registered_warranty: false,
                    })
                  }
                />
              </div>
              <div className="col-6 gb-pl">
                <CustomCheckBoxButtom
                  label="Registered"
                  checked={form.registered_warranty}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      registered_warranty: e.target.checked,
                      work_warranty: false,
                    })
                  }
                />
              </div>
              <div className="col-12 mt-3">
                {errs.formErr ? (
                  <p className="text-danger text-center">
                    Please fill in the form
                  </p>
                ) : null}
                {errs.success ? (
                  <p className="text-success text-center">
                    Selections added to estimate
                  </p>
                ) : null}
                {errs.failed ? (
                  <p className="text-danger text-center">
                    There was an error. Try again later!
                  </p>
                ) : null}
                <input
                  type="submit"
                  value="Complete Selections"
                  className="btn w-100"
                  style={btnStyle}
                />
              </div>
            </div>
          </CCard>
        </CCollapse>
      </form>
    </div>
  );
}

const CustomCheckBoxButtom = (props) => {
  return (
    <div>
      <label
        className={
          props.checked ? "btn text-white w-100" : "btn text-white w-100"
        }
        style={
          props.checked
            ? { backgroundColor: "#414141" }
            : { backgroundColor: "darkgray" }
        }
      >
        {props.label}
        <input
          type="checkbox"
          hidden
          checked={props.checked}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

const inputStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};

const inputErrorStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid red",
};

const headerStyle = {
  backgroundColor: "#f4f4f4",
};

const subHeader = {
  marginTop: "0.5rem",
};

const btnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
  backgroundColor: "#e60029",
  color: "#fff",
};
