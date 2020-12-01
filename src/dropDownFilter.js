import React, { useEffect, useState } from "react";

import allData from "./data2";

// import SelectSearch from "react-select-search";
const DropDownFilter = () => {
  const [bender, setBender] = useState();
  const [nation, setNation] = useState();
  const [person, setPerson] = useState();
  const [show, setShow] = useState();
  const [textSearch, setTextSearch] = useState();

  const [originalState, setOriginalState] = useState(allData);

  const [state, setState] = useState(allData);

  useEffect(() => {
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

    console.log(textSearch);
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
      <select onChange={(e) => setBender(e.target.value)}>
        <option value="">--Select--</option>

        {uniqueBenderData.map((x) => (
          <option value={x}>{x}</option>
        ))}
      </select>
      <label>Nation</label>
      <select onChange={(e) => setNation(e.target.value)}>
        <option value="">--Select--</option>
        {uniqueNationData.map((x) => (
          <option value={x}>{x}</option>
        ))}
      </select>
      <label>Person</label>
      <select onChange={(e) => setPerson(e.target.value)}>
        <option value="">--Select--</option>
        {uniquePersonData.map((x) => (
          <option value={x}>{x}</option>
        ))}
      </select>
      <label>Show</label>
      <select onChange={(e) => setShow(e.target.value)}>
        <option value="">--Select--</option>
        {uniqueShowData.map((x) => (
          <option value={x}>{x}</option>
        ))}
      </select>

      {/* <input type="text" onChange={(e) => setTextSearch(e.target.value)} /> */}
      {/* <SelectSearch options={name} multiple search placeholder=" Search Name" /> */}
      {state.length > 0 ? (
        state.map((x) => (
          <tr className="data">
            <td key={x.name}>{x.name}</td>
          </tr>
        ))
      ) : (
        <h1>NoData</h1>
      )}
    </div>
  );
};

export default DropDownFilter;
