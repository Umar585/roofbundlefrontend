import React from "react";
import Input from "../../Components/Input";
import CheckBox from "../../Components/CheckBox";
//style sheet
import "../style.scss";

export default function ProfessionalProcedure(props) {
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
              <th>Strip</th>
              <th>Use nails</th>
              <th>Caulk vents and flashing</th>
              <th>Clean eavestroughs</th>
              <th>Clean up and remove debris</th>
              <th>Install shingle over ridge venting</th>
              <th>Install drip edge flashing to eaves</th>
              <th>Install ice & water proof (eaves protection)</th>
              <th>Install ice & water proof (valley protection)</th>
              <th>Install underlayment to entire roof deck</th>
              <th>Install 2 ply membrane</th>
              <th>Convert plumbing exhaust to ABS pipe & new flashing mat</th>
              <th>
                Convert plumbing exhaust to ABS pipe & new plumbing flashing mat
                only
              </th>
            </tr>
          </thead>
          <tbody>
            {/*True Or False Values */}
            <tr>
              <th>True or False</th>
              <th>
                <CheckBox
                  id="stripCheck"
                  checked={form.strip}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      strip: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="useNailsCheck"
                  checked={form.useNails}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      useNails: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="caulkVentFlashing"
                  checked={form.caulkVentFlashing}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      caulkVentFlashing: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="cleanEaves"
                  checked={form.cleanEaves}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      cleanEaves: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="cleanRemoveDebris"
                  checked={form.cleanRemoveDebris}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      cleanRemoveDebris: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installSOverRV"
                  checked={form.installSOverRV}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installSOverRV: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installDEOverFToE"
                  checked={form.installDEOverFToE}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installDEOverFToE: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installIWEProtection"
                  checked={form.installIWEProtection}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installIWEProtection: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installIWVProtection"
                  checked={form.installIWVProtection}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installIWVProtection: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installUtoRoof"
                  checked={form.installUtoRoof}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installUtoRoof: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="installPly"
                  checked={form.installPly}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installPly: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="convertPEtoAbsP"
                  checked={form.convertPEtoAbsP}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      convertPEtoAbsP: e.target.checked,
                    })
                  }
                />
              </th>
              <th>
                <CheckBox
                  id="convertPEtoAbsPMat"
                  checked={form.convertPEtoAbsPMat}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      convertPEtoAbsPMat: e.target.checked,
                    })
                  }
                />
              </th>
            </tr>
            {/*Number Values */}
            <tr>
              <th>Value</th>
              <th>
                <Input
                  type="number"
                  id="strip"
                  placeholder="Strip"
                  value={form.stripValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      stripValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="useNails"
                  placeholder="Use Nails"
                  value={form.useNailsValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      useNailsValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="CaulkVentFlashing"
                  placeholder="Caulk Vents and Flashing"
                  value={form.caulkVentFlashingValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      caulkVentFlashingValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="cleanEaves"
                  placeholder="Clean Eavestroughs"
                  value={form.cleanEavesValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      cleanEavesValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="cleanupDebris"
                  placeholder="Clean up and Remove Debris"
                  value={form.cleanRemoveDebrisValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      cleanRemoveDebrisValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="shingleOverRidgeVent"
                  placeholder="Install Shingle Over Ridge Venting"
                  value={form.installSOverRVValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installSOverRVValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="dripEdgetoEaves"
                  placeholder="Install Drip Edge Flashing to Eaves"
                  value={form.installDEOverFToEValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installDEOverFToEValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="iceWaterEaveProof"
                  placeholder="Install Ice & Water Proof Membrane as Eaves Protection"
                  value={form.installIWEProtectionValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installIWEProtectionValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="iceWaterVallyProof"
                  placeholder="Install Ice & Water Proof Membrane as Valley Protection"
                  value={form.installIWVProtectionValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installIWVProtectionValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="roofdeckUnderlayment"
                  placeholder="Install Underlayment to entire roof deck"
                  value={form.installUtoRoofValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installUtoRoofValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="twoPly"
                  placeholder="Install 2 Ply Membrane"
                  value={form.installPlyValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      installPlyValue: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  type="number"
                  id="plumbingtoAbs"
                  placeholder="Convert Plumbing Exhaust to ABS Pipe & New Flashing Mat"
                  value={form.convertPEtoAbsPValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      convertPEtoAbsPValue: e.target.value,
                    })
                  }
                />
              </th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
