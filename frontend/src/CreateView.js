import React, { Component } from "react";
import { ReactDOM } from "react";
import "./CreateView.css";

function CreateView(){

  const [selectValue, setSelectValue] = React.useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };
    
  return (
  <>
    <form>
      <div className="row">
        <div className="selectionbar">
        <label className="labels">Select chart data:</label>
            <select onChange={onChange} className="data-select"> 
              <optgroup label="Select data"></optgroup> 
              <option value="v1_a">V1 Annual Data</option> 
              <option value="v1_m">V1 Monthly Data</option>
              <option value="v3">V3 Data</option>
              <option value="v5">V5 Data</option>
              <option value="v6">V6 Data</option>
              <option value="v7">V7 Data</option>
              <option value="v9">V9 Data</option>
            </select>
        </div>
        <div className="column">
        {selectValue && <h2 className="mt-3">{selectValue}</h2>}
        </div>
      </div>
    </form>
  </>
  );
    
}

export default CreateView;