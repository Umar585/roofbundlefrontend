import React, { useState, useEffect } from "react";
import { CButton, CCard, CCardBody, CCollapse } from "@coreui/react";
//custom Components
import Input from "../Components/Input";
import Select from "../Components/Select";
import CheckBox from "../Components/CheckBox";
//scss
import "./style.scss";
//icons
import * as AiIcon from "react-icons/ai";

export default function Form() {
  const [accordion, setAccordion] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
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
  });

  //clear RoofData Function
  const clearRoofData = () => {
    setForm({
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
    });
  };

  //add new row
  const AddArray = (e) => {
    e.preventDefault();

    let item = items;
    let rT = "";
    let b = "";
    let nC = "";

    if (form.roofTop === true) {
      rT = "true";
    } else {
      rT = "false";
    }

    if (form.bin === true) {
      b = "true";
    } else {
      b = "false";
    }

    if (form.newConst === true) {
      nC = "true";
    } else {
      nC = "false";
    }

    item.push({
      pitch: form.pitch,
      stories: form.stories,
      roofTop: rT,
      bin: b,
      newConst: nC,
      lengthGrnd: form.lengthGrnd,
      width: form.width,
      eave: form.eave,
      gableGrnd: form.gableGrnd,
      valleyRM: form.valleyRM,
      hipRM: form.hipRM,
      ridge: form.ridge,
      wall: form.wall,
      chimney: form.chimney,
    });

    setForm({
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
    });
  };

  const removeRoofFace = (i) => {
    items.splice(i, 1);
    setItems(items);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const inputs = event.target.form;
      const index = Array.prototype.indexOf.call(inputs, event.target);
      inputs.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, tableArray: items });
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      console.log(form);
    }, 1000);
  };

  //1st Stories Eaves
  const [firstStoryEaves, setFirstStoryEaves] = useState([]);
  const FirstStoryEaves = () => {
    var t = [];
    var e = [];

    items.map(function (singleElement) {
      e.push(parseFloat(singleElement.stories));
      const index = e.indexOf(2);
      if (index > -1) {
        e.splice(index, 1);
        e.push(parseFloat(singleElement.eave));
        return e;
      }
      t.push(parseFloat(singleElement.eave));
      return t;
    });
    setFirstStoryEaves(t.reduce((a, b) => a + b, 0));
  };

  //2nd Stories Eaves
  const [secondStoryEaves, setSecondStoryEaves] = useState([]);
  const SecondStoryEaves = () => {
    var t = [];
    var e = [];

    items.map(function (singleElement) {
      e.push(parseFloat(singleElement.stories));
      const index = e.indexOf(1);
      if (index > -1) {
        e.splice(index, 1);
        e.push(parseFloat(singleElement.eave));
        return e;
      }
      t.push(parseFloat(singleElement.eave));
      return t;
    });
    setSecondStoryEaves(t.reduce((a, b) => a + b, 0));
  };

  useEffect(() => {
    FirstStoryEaves();
    SecondStoryEaves();
  });

  return (
    <div>
      {formLoading ? null : (
        <>
          <form onSubmit={handleSubmit}>
            <div id="accordion">
              <CCard className="shadow">
                <CButton
                  style={btnStyle}
                  onClick={() => setAccordion(accordion === 0 ? null : 0)}
                >
                  <h5>Roof Data Table</h5>
                </CButton>

                <CCollapse show={accordion === 0}>
                  <CCardBody>
                    <CButton
                      style={addBtnStyle}
                      className="btn btn-info mb-4"
                      onClick={AddArray}
                    >
                      Add Row +
                    </CButton>
                    <div className="table-responsive custTable">
                      <table className="table table-responsive-lg ">
                        <thead>
                          <tr>
                            <th>Face</th>
                            <th>Pitch</th>
                            <th>Stories</th>
                            <th>Rooftop</th>
                            <th>Bin</th>
                            <th>New Const</th>
                            <th>Length (Ground)</th>
                            <th>Width</th>
                            <th>Eave</th>
                            <th>Gable (Ground)</th>
                            <th>Valley (Roof Measure)</th>
                            <th>Hip (Roof Measure)</th>
                            <th>Ridge</th>
                            <th>Wall</th>
                            <th>Chimney</th>
                            <th>Clear</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#</td>
                            <td>
                              <Select
                                id="pitch"
                                value={form.pitch}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    pitch: e.target.value,
                                  })
                                }
                                title="Pitch"
                                array={[1, 2, 3, 4]}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="stories"
                                value={form.stories}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    stories: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <CheckBox
                                id="roofTop"
                                checked={form.roofTop}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    roofTop: e.target.checked,
                                  })
                                }
                              />
                            </td>
                            <td>
                              <CheckBox
                                id="bin"
                                checked={form.bin}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    bin: e.target.checked,
                                  })
                                }
                              />
                            </td>
                            <td>
                              <CheckBox
                                id="newConst"
                                checked={form.newConst}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    newConst: e.target.checked,
                                  })
                                }
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="lengthGrnd"
                                value={form.lengthGrnd}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    lengthGrnd: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="width"
                                value={form.width}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    width: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="eave"
                                value={form.eave}
                                onChange={(e) =>
                                  setForm({ ...form, eave: e.target.value })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="gableGrnd"
                                value={form.gableGrnd}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    gableGrnd: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="valleyRM"
                                value={form.valleyRM}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    valleyRM: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="hipRM"
                                value={form.hipRM}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    hipRM: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="ridge"
                                value={form.ridge}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    ridge: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="wall"
                                value={form.wall}
                                onChange={(e) =>
                                  setForm({ ...form, wall: e.target.value })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="chimney"
                                value={form.chimney}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    chimney: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              {
                                <AiIcon.AiOutlineMinusCircle
                                  onClick={clearRoofData}
                                  style={{
                                    fontSize: "25px",
                                    color: "red",
                                    cursor: "pointer",
                                  }}
                                />
                              }
                            </td>
                          </tr>
                          {isLoading ? (
                            <tr>
                              <td className="lead">Deleting...</td>
                            </tr>
                          ) : (
                            <>
                              {items.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.pitch}</td>
                                    <td>{item.stories}</td>
                                    <td>{item.roofTop}</td>
                                    <td>{item.bin}</td>
                                    <td>{item.newConst}</td>
                                    <td>{item.lengthGrnd}</td>
                                    <td>{item.width}</td>
                                    <td>{item.eave}</td>
                                    <td>{item.gableGrnd}</td>
                                    <td>{item.valleyRM}</td>
                                    <td>{item.hipRM}</td>
                                    <td>{item.ridge}</td>
                                    <td>{item.wall}</td>
                                    <td>{item.chimney}</td>
                                    <td>
                                      <AiIcon.AiOutlineMinusCircle
                                        onClick={(e) => {
                                          e.preventDefault();
                                          removeRoofFace(index);
                                        }}
                                        style={{
                                          fontSize: "25px",
                                          color: "red",
                                          cursor: "pointer",
                                        }}
                                      />
                                    </td>
                                  </tr>
                                );
                              })}
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </CCardBody>
                </CCollapse>
                <CButton
                  style={btnStyle}
                  onClick={() => setAccordion(accordion === 1 ? null : 1)}
                >
                  <h5>Vent Data Table</h5>
                </CButton>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    <div className="table-responsive custTable">
                      <table className="table table-responsive-lg">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Replace</th>
                            <th>Remove</th>
                            <th>New</th>
                            <th>Exhaust</th>
                            <th>Ridge</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Basic Ventilation</th>
                            <td>
                              <Input
                                type="number"
                                id="replace"
                                value={form.replace}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    replace: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="remove"
                                value={form.remove}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    remove: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="new"
                                value={form.new}
                                onChange={(e) =>
                                  setForm({ ...form, new: e.target.value })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="exhaust"
                                value={form.exhaust}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    exhaust: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="basicRidge"
                                value={form.basicRidge}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    basicRidge: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CCardBody>
                </CCollapse>

                <CButton
                  style={btnStyle}
                  onClick={() => setAccordion(accordion === 2 ? null : 2)}
                >
                  <h5>Plumbing Stack Data Table</h5>
                </CButton>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                    <div className="table-responsive custTable">
                      <table className="table table-responsive-lg">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Re-Seal</th>
                            <th>Conversions</th>
                            <th>1.5" Mat</th>
                            <th>2" Mat</th>
                            <th>3" Mat</th>
                            <th>4" Mat</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Plumbing Stack Basic</th>
                            <td>
                              <Input
                                type="number"
                                id="reSeal"
                                value={form.reSeal}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    reSeal: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="conversions"
                                value={form.conversions}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    conversions: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="oneMat"
                                value={form.oneMat}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    oneMat: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="twoMat"
                                value={form.twoMat}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    twoMat: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="threeMat"
                                value={form.threeMat}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    threeMat: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                id="fourMat"
                                value={form.fourMat}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    fourMat: e.target.value,
                                  })
                                }
                                onKeyDown={handleEnter}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CCardBody>
                </CCollapse>

                <CButton
                  style={btnStyle}
                  onClick={() => setAccordion(accordion === 3 ? null : 3)}
                >
                  <h5>Eaves Trough Data Info</h5>
                </CButton>
                <CCollapse show={accordion === 3}>
                  <CCardBody>
                    <div className="table-responsive custTable">
                      <table className="table table-responsive-lg">
                        <thead>
                          <tr>
                            <th></th>
                            <th>1st story eaves</th>
                            <th>Adjustment (ft)</th>
                            <th>2nd Storey Eaves</th>
                            <th>2 St Adjustment</th>
                            <th>Corners</th>
                            <th>1 Story Downs</th>
                            <th>2 Story Downs</th>
                            <th>Extra Extensions</th>
                            <th>Difficulty</th>
                            <th>Margin</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Total</th>
                            <td>{firstStoryEaves}</td>
                            <td>0</td>
                            <td>{secondStoryEaves}</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <th>Cost</th>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CCardBody>
                </CCollapse>
                <div className="mt-4">
                  <input
                    type="submit"
                    className="btn btn-success w-100 rounded-0"
                    value="Save"
                  />
                </div>
              </CCard>
            </div>
          </form>
          {/*-<CalculationsTable />*/}
        </>
      )}
    </div>
  );
}

const addBtnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  float: "right",
};

const btnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "none",
};
