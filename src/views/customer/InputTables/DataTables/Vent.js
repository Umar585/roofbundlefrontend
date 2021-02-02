import React from "react";
import Input from "../../Components/Input";
//style sheet
import "../style.scss";

export default function Vent(props) {
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
                  onChange={(e) => setForm({ ...form, new: e.target.value })}
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
    </div>
  );
}
