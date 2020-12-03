import React, { useState } from "react";
import "./App.css";

const initialState = [
  { id: 1, value: "banana", isChecked: false },
  { id: 2, value: "apple", isChecked: false },
  { id: 3, value: "mango", isChecked: false },
  { id: 4, value: "grap", isChecked: false },
];

function CheckboxFilter() {
  const [fruites, setfruites] = useState(initialState);

  const handleCheckboxFilter = (event) => {
    let fruitesData = [...fruites];

    fruitesData.forEach((fruite) =>
      fruite.value === event.target.value
        ? (fruite.isChecked = event.target.checked)
        : ""
    );
    setfruites(fruitesData);
  };

  const handleToggleCheckbox = (event) => {
    let fruitesData = [...fruites];
    fruitesData.map((x) => (x.isChecked = event.target.checked));
    setfruites(fruitesData);
  };
  console.log(fruites);
  return (
    <div>
      <input
        type="checkbox"
        value="toggleCheck"
        onClick={handleToggleCheckbox}
      />{" "}
      Toggle Checkbox
      <ul>
        {fruites.map((x, index) => (
          <li>
            <input
              onClick={handleCheckboxFilter}
              key={index}
              value={x.value}
              type="checkbox"
              checked={x.isChecked}
            />{" "}
            {x.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxFilter;
