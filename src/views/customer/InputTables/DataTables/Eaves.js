import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";

export default function Eaves(props) {
  const form = props.form;
  const setForm = props.setForm;
  const items = props.items;

  const handleEnter = props.handleEnter;

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
              <th>Measurement</th>
              <td>
                {form.adjOneStory
                  ? firstStoryEaves + parseFloat(form.adjOneStory)
                  : firstStoryEaves}
              </td>
              <td>
                <Input
                  type="number"
                  id="adjOneStory"
                  value={form.adjOneStory}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      adjOneStory: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                {form.adjTwoStory
                  ? secondStoryEaves + parseFloat(form.adjTwoStory)
                  : secondStoryEaves}
              </td>
              <td>
                <Input
                  type="number"
                  id="adjTwoStory"
                  value={form.adjTwoStory}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      adjTwoStory: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="corners"
                  value={form.corners}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      corners: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="oneStoryDown"
                  value={form.oneStoryDown}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      oneStoryDown: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="twoStoryDown"
                  value={form.twoStoryDown}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      twoStoryDown: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="extraExtensions"
                  value={form.extraExtensions}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      extraExtensions: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="difficulty"
                  value={form.difficulty}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      difficulty: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="margin"
                  value={form.margin}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      margin: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td>
                <Input
                  type="number"
                  id="oneStoryPrice"
                  value={form.oneStoryPrice}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      oneStoryPrice: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td></td>
              <td>
                <Input
                  type="number"
                  id="twoStoryPrice"
                  value={form.twoStoryPrice}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      twoStoryPrice: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td></td>
              <td>
                <Input
                  type="number"
                  id="cornersPrice"
                  value={form.cornersPrice}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      cornersPrice: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="oneStoryDownPrice"
                  value={form.oneStoryDownPrice}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      oneStoryDownPrice: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="twoStoryDownPrice"
                  value={form.twoStoryDownPrice}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      twoStoryDownPrice: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="extraExtensionsPrice"
                  value={form.extraExtensionsPrice}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      extraExtensionsPrice: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="difficultyPrice"
                  value={form.difficultyPrice}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      difficultyPrice: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <Input
                  type="number"
                  id="marginPrice"
                  value={form.marginPrice}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      marginPrice: e.target.value,
                    })
                  }
                  onKeyDown={handleEnter}
                />
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                $
                {form.oneStoryPrice
                  ? form.adjOneStory
                    ? (firstStoryEaves + parseFloat(form.adjOneStory)) *
                      form.oneStoryPrice
                    : firstStoryEaves * form.oneStoryPrice
                  : 0}
              </td>
              <td></td>
              <td>
                $
                {form.twoStoryPrice
                  ? form.adjTwoStory
                    ? (secondStoryEaves + parseFloat(form.adjTwoStory)) *
                      form.twoStoryPrice
                    : secondStoryEaves * form.twoStoryPrice
                  : 0}
              </td>
              <td></td>
              <td>
                ${form.cornersPrice ? form.corners * form.cornersPrice : 0}
              </td>
              <td>
                $
                {form.oneStoryDownPrice
                  ? form.oneStoryDown * form.oneStoryDownPrice
                  : 0}
              </td>
              <td>
                $
                {form.twoStoryDownPrice
                  ? form.twoStoryDown * form.twoStoryDownPrice
                  : 0}
              </td>
              <td>
                $
                {form.extraExtensionsPrice
                  ? form.extraExtensions * form.extraExtensionsPrice
                  : 0}
              </td>
              <td>
                $
                {form.difficultyPrice
                  ? form.difficulty * form.difficultyPrice
                  : 0}
              </td>
              <td>${form.marginPrice ? form.margin * form.marginPrice : 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
