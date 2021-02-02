import React from "react";
import Input from "../../Components/Input";
import CheckBox from "../../Components/CheckBox";
import { CButton } from "@coreui/react";
//style sheet
import "../style.scss";
//icons
import * as AiIcon from "react-icons/ai";

export default function Roof(props) {
  const isLoading = props.isLoading;
  const items = props.items;
  const form = props.form;
  const setForm = props.setForm;
  //const AddArray = props.AddArray;

  const removeRoofFace = props.removeRoofFace;
  const handleEnter = props.handleEnter;

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

  return (
    <div>
      <CButton
        style={addBtnStyle}
        className="btn btn-info mb-4"
        onClick={AddArray}
      >
        Add Row +
      </CButton>
      <div
        className="table-responsive custTable"
        style={{
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
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
                <div className="form-group">
                  <select
                    className="form-control"
                    id="pitch"
                    name="pitch"
                    style={inputStyle}
                    value={form.pitch}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        pitch: e.target.value,
                      })
                    }
                  >
                    <option value="">Pitch</option>
                    <option value="1">1/12</option>
                    <option value="2">2/12</option>
                    <option value="3">3/12</option>
                    <option value="4">4/12</option>
                    <option value="5">5/12</option>
                    <option value="6">6/12</option>
                    <option value="7">7/12</option>
                    <option value="8">8/12</option>
                    <option value="9">9/12</option>
                    <option value="10">10/12</option>
                    <option value="11">11/12</option>
                    <option value="12">12/12</option>
                    <option value="13">13/12</option>
                    <option value="14">14/12</option>
                    <option value="15">15/12</option>
                    <option value="16">16/12</option>
                    <option value="17">17/12</option>
                    <option value="18">18/12</option>
                  </select>
                </div>
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
                  onChange={(e) => setForm({ ...form, eave: e.target.value })}
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
                  onChange={(e) => setForm({ ...form, wall: e.target.value })}
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
    </div>
  );
}

const addBtnStyle = {
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
  float: "right",
};

const inputStyle = {
  margin: "2px",
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};
