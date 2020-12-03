import React, { useEffect, useState } from "react";

import allData from "./data2";

const DropDownFilter = () => {
  const obj = {
    bender: JSON.parse(localStorage.getItem("bender")) || "",
    nation: JSON.parse(localStorage.getItem("nation")) || "",
    person: JSON.parse(localStorage.getItem("person")) || "",
    show: JSON.parse(localStorage.getItem("show")) || "",
    textSearch: "",
  };

  const [filter, setFilter] = useState(obj);
  // eslint-disable-next-line no-unused-vars
  const [originalState, setOriginalState] = useState(allData);
  const [state, setState] = useState(allData);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterData = () => {
    let benderData = filter.bender
      ? originalState.filter((x) => x.bender === filter.bender)
      : originalState;
    let nationData = filter.nation
      ? benderData.filter((x) => x.nation === filter.nation)
      : benderData;

    let personData = filter.person
      ? nationData.filter((x) => x.person === filter.person)
      : nationData;
    let showData = filter.show
      ? personData.filter((x) => x.show === filter.show)
      : personData;
    const textSearchData = filter.textSearch
      ? showData.filter((x) =>
          x.name.toLocaleLowerCase().includes(filter.textSearch)
        )
      : showData;
    setState(textSearchData);
    // setFilter(textSearchData);
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filter.bender,
    filter.nation,
    filter.person,
    filter.show,
    filter.textSearch,
  ]);
  let benderData = originalState.map((x) => x.bender);
  let uniqueBenderData = [...new Set(benderData)];

  let nationData = originalState.map((x) => x.nation);
  let uniqueNationData = [...new Set(nationData)];

  let personData = originalState.map((x) => x.person);
  let uniquePersonData = [...new Set(personData)];

  let showData = originalState.map((x) => x.show);
  let uniqueShowData = [...new Set(showData)];

  const clearFilter = () => {
    setFilter({});
    localStorage.removeItem("bender");
    localStorage.removeItem("person");
    localStorage.removeItem("nation");
    localStorage.removeItem("show");
  };

  return (
    <div>
      <label>Bender</label>
      <select
        name="bender"
        placeholder="Select"
        onChange={(e) => {
          setFilter({ ...filter, bender: e.target.value });
          localStorage.setItem([e.target.name], JSON.stringify(e.target.value));
        }}
      >
        <option value="">Select</option>

        {uniqueBenderData.map((x, index) => (
          <option
            key={index}
            value={x}
            selected={filter.bender === x ? true : false}
          >
            {x}
          </option>
        ))}
      </select>

      <label>Nation</label>
      <select
        name="nation"
        onChange={(e) => {
          setFilter({ ...filter, nation: e.target.value });
          localStorage.setItem([e.target.name], JSON.stringify(e.target.value));
        }}
      >
        <option value="">Select</option>

        {uniqueNationData.map((x, index) => (
          <option
            key={index}
            value={x}
            selected={filter.nation === x ? true : false}
          >
            {x}
          </option>
        ))}
      </select>

      <label>Person</label>
      <select
        name="person"
        onChange={(e) => {
          setFilter({ ...filter, person: e.target.value });
          localStorage.setItem([e.target.name], JSON.stringify(e.target.value));
        }}
      >
        <option value="">Select</option>
        {uniquePersonData.map((x, index) => (
          <option
            key={index}
            value={x}
            selected={filter.person === x ? true : false}
          >
            {x}
          </option>
        ))}
      </select>
      <label>Show</label>
      <select
        name="show"
        onChange={(e) => {
          setFilter({ ...filter, show: e.target.value });
          localStorage.setItem([e.target.name], JSON.stringify(e.target.value));
        }}
      >
        <option value="">Select</option>
        {uniqueShowData.map((x, index) => (
          <option
            key={index}
            value={x}
            selected={filter.show === x ? true : false}
          >
            {x}
          </option>
        ))}
      </select>
      <button onClick={clearFilter}>Clear Filter</button>
      <br />
      <input
        type="text"
        onChange={(e) =>
          setFilter({
            ...filter,
            textSearch: e.target.value.toLocaleLowerCase().trim(),
          })
        }
      />

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
