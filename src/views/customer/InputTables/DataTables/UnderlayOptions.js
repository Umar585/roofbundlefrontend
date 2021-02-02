import React from "react";
import Input from "../../Components/Input";
import CheckBox from "../../Components/CheckBox";
//style sheet
import "../style.scss";

export default function UnderlayOptions(props) {
  const form = props.form;
  const setForm = props.setForm;

  return (
    <div>
      <div className="table-responsive custTable">
        <table
          className="table table-responsive-lg"
          style={{ paddingRight: "0px" }}
        >
          <thead>
            <tr>
              <th></th>
              <th>Install drip edge flashing to eaves</th>
              <th>Install ice & water proof membrane </th>
              <th>Install breathable synthetic to entire roof deck</th>
              <th>Install metal valley flashing</th>
              <th>Install high profile hip & ridge capping</th>
              <th>Re-Flashing and counter flash chimney</th>
              <th>Chimney removal (if prerequisite is met)</th>
              <th>Roof Deck Replacement</th>
            </tr>
          </thead>
          <tbody>
            {/*True Or False Values */}
            <tr>
              <th>True or False</th>
              <th>
                <CheckBox
                  id="installDEFtoE"
                  checked={form.installDEFtoE}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installDEFtoE: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installIWMembrane"
                  checked={form.installIWMembrane}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installIWMembrane: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installBStoRoof"
                  checked={form.installBStoRoof}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installBStoRoof: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installMetalVF"
                  checked={form.installMetalVF}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installMetalVF: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installHPHRCapping"
                  checked={form.installHPHRCapping}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installHPHRCapping: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="reflashCFChimney"
                  checked={form.reflashCFChimney}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      reflashCFChimney: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="chimneyRemoval"
                  checked={form.chimneyRemoval}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      chimneyRemoval: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="roofDeckReplace"
                  checked={form.roofDeckReplace}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      roofDeckReplace: e.target.checked,
                    })
                  }
                />
              </th>
            </tr>
            {/*House Values */}
            <tr>
              <th>House</th>
              <th>
                <CheckBox
                  id="installDEFtoEHome"
                  checked={form.installDEFtoEHome}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installDEFtoEHome: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installIWMembraneHome"
                  checked={form.installIWMembraneHome}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installIWMembraneHome: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installBStoRoofHome"
                  checked={form.installBStoRoofHome}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installBStoRoofHome: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installMetalVFHome"
                  checked={form.installMetalVFHome}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installMetalVFHome: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installHPHRCappingHome"
                  checked={form.installHPHRCappingHome}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installHPHRCappingHome: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="reflashCFChimneyHome"
                  checked={form.reflashCFChimneyHome}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      reflashCFChimneyHome: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="chimneyRemovalHome"
                  checked={form.chimneyRemovalHome}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      chimneyRemovalHome: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="roofDeckReplaceHome"
                  checked={form.roofDeckReplaceHome}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      roofDeckReplaceHome: e.target.checked,
                    })
                  }
                />
              </th>
            </tr>
            {/*Garage Values */}
            <tr>
              <th>Garage</th>
              <th>
                <CheckBox
                  id="installDEFtoEGarage"
                  checked={form.installDEFtoEGarage}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installDEFtoEGarage: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installIWMembraneGarage"
                  checked={form.installIWMembraneGarage}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installIWMembraneGarage: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installBStoRoofGarage"
                  checked={form.installBStoRoofGarage}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installBStoRoofGarage: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installMetalVFGrage"
                  checked={form.installMetalVFGrage}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installMetalVFGrage: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installHPHRCappingGarage"
                  checked={form.installHPHRCappingGarage}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installHPHRCappingGarage: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="reflashCFChimneyGarage"
                  checked={form.reflashCFChimneyGarage}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      reflashCFChimneyGarage: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="chimneyRemovalGarage"
                  checked={form.chimneyRemovalGarage}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      chimneyRemovalGarage: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="roofDeckReplaceGarage"
                  checked={form.roofDeckReplaceGarage}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      roofDeckReplaceGarage: e.target.checked,
                    })
                  }
                />
              </th>
            </tr>
            <tr>
              <th>Amount</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>
                <Input
                  type="number"
                  id="roofReplaceAmount"
                  placeholder="Roof Deck Replacement Amount"
                  value={form.roofDeckAmount}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      roofDeckAmount: e.target.value,
                    })
                  }
                />
              </th>
            </tr>
            <tr>
              <th>5/10 Warranty</th>
              <th>
                <CheckBox
                  id="underlayWarranty"
                  checked={form.underlayWarranty}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      underlayWarranty: e.target.checked,
                    })
                  }
                />
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Existing Color</th>
              <th>
                <Input
                  type="text"
                  id="existingShingleColor"
                  placeholder="Existing Shingle Color"
                  value={form.existingShingleColor}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      existingShingleColor: e.target.value,
                    })
                  }
                />
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>New Color</th>
              <th>
                <Input
                  type="text"
                  id="newShingleColor"
                  placeholder="New Shingle Color"
                  value={form.newShingleColor}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      newShingleColor: e.target.value,
                    })
                  }
                />
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </table>
        <div className="form-group">
          <label>Other Work to be completed</label>
          <pre>
            <textarea
              rows="3"
              id="underlayNotes"
              nam="underlayNotes"
              className="form-control w-100"
              style={inputStyle}
              value={form.underlayNotes}
              onChange={(e) =>
                setForm({
                  ...form,
                  underlayNotes: e.target.value,
                })
              }
            ></textarea>
          </pre>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  margin: "2px",
  outline: "none",
  boxShadow: "none",
  border: "1px solid lightgray",
};
