import React from "react";
import Input from "../../Components/Input";
//style sheet
import "../style.scss";

export default function PlumbingStack(props) {
  const form = props.form;
  const setForm = props.setForm;
  const handleEnter = props.handleEnter;
  return (
    <div>
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
    </div>
  );
}
