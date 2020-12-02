import React, { useEffect, useState } from "react";

import allData from "./data2";

// import SelectSearch from "react-select-search";
const DropDownFilter = () => {
  const [bender, setBender] = useState(
    JSON.parse(localStorage.getItem("bender")) || ""
  );
  const [nation, setNation] = useState(
    JSON.parse(localStorage.getItem("nation")) || ""
  );
  const [person, setPerson] = useState(
    JSON.parse(localStorage.getItem("person")) || ""
  );
  const [show, setShow] = useState(
    JSON.parse(localStorage.getItem("show")) || ""
  );
  const [textSearch, setTextSearch] = useState();
  // eslint-disable-next-line no-unused-vars
  const [originalState, setOriginalState] = useState(allData);
  const [state, setState] = useState(allData);

  //   const benderFilter = JSON.parse(localStorage.getItem("bender")) || "";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterData = () => {
    let benderData = bender
      ? originalState.filter((x) => x.bender === bender)
      : originalState;
    let nationData = nation
      ? benderData.filter((x) => x.nation === nation)
      : benderData;
    let personData = person
      ? nationData.filter((x) => x.person === person)
      : nationData;
    let showData = show
      ? personData.filter((x) => x.show === show)
      : personData;
    const textSearchData = textSearch
      ? showData.filter((x) => x.name.includes(textSearch))
      : showData;
    setState(textSearchData);
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bender, nation, person, show, textSearch]);

  let benderData = originalState.map((x) => x.bender);
  let uniqueBenderData = [...new Set(benderData)];

  let nationData = originalState.map((x) => x.nation);
  let uniqueNationData = [...new Set(nationData)];

  let personData = originalState.map((x) => x.person);
  let uniquePersonData = [...new Set(personData)];

  let showData = originalState.map((x) => x.show);
  let uniqueShowData = [...new Set(showData)];

  return (
    <div>
      <label>Bender</label>
      <select
        name="bender"
        placeholder="Select"
        onChange={(e) => {
          setBender(e.target.value);
          localStorage.setItem([e.target.name], JSON.stringify(e.target.value));
        }}
      >
        <option value="">Select</option>

        {uniqueBenderData.map((x, index) => (
          <option key={index} value={x} selected={bender === x ? true : false}>
            {x}
          </option>
        ))}
      </select>

      <label>Nation</label>
      <select
        name="nation"
        onChange={(e) => {
          setNation(e.target.value);
          localStorage.setItem([e.target.name], JSON.stringify(e.target.value));
        }}
      >
        <option value="">Select</option>
        {uniqueNationData.map((x, index) => (
          <option key={index} value={x} selected={nation === x ? true : false}>
            {x}
          </option>
        ))}
      </select>
      <label>Person</label>
      <select
        name="person"
        onChange={(e) => {
          setPerson(e.target.value);
          localStorage.setItem([e.target.name], JSON.stringify(e.target.value));
        }}
      >
        <option value="">Select</option>
        {uniquePersonData.map((x, index) => (
          <option key={index} value={x} selected={person === x ? true : false}>
            {x}
          </option>
        ))}
      </select>
      <label>Show</label>
      <select
        name="show"
        onChange={(e) => {
          setShow(e.target.value);
          localStorage.setItem([e.target.name], JSON.stringify(e.target.value));
        }}
      >
        <option value="">Select</option>
        {uniqueShowData.map((x, index) => (
          <option key={index} value={x} selected={show === x ? true : false}>
            {x}
          </option>
        ))}
      </select>

      <input type="text" onChange={(e) => setTextSearch(e.target.value)} />

      <table>
        <tbody>
          {state.length > 0 ? (
            state.map((x, index) => (
              <tr key={index}>
                <td>{x.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <h1>NoData</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DropDownFilter;
//add button after textbox if NO data available

//------------------------------------
//--------------------------------
// let benderData = bender
//   ? originalState.filter((x) => x.bender === bender)
//   : originalState;
// console.log("---->", benderData);
// setState(benderData);
// console.log("State", state);
// let nationData = nation
//   ? state.filter((x) => x.nation === nation)
//   : benderData;
// setState(nationData);
// let personData = person ? state.filter((x) => x.person === person) : state;
// setState(personData);
// let showData = show ? state.filter((x) => x.show === show) : state;
// setState(showData);
// const textSearchData = textSearch
//   ? state.filter((x) => x.name.includes(textSearch))
//   : state;
// setState(textSearchData);
//---------------------------
// let final = originalState.filter((x) => {
//   return bender
//     ? x.bender === bender
//     : x || nation
//     ? x.nation === nation
//     : x;
// });
