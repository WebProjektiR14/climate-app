import React, { Component } from "react";
import { ReactDOM } from "react";
import "./CreateView.css";
import { SaveView } from "./SaveView";
import DataV1AnnualChart from "./DataV1AnnualChart";
import DataV1MonthlyChart from "./DataV1MonthlyChart";
import DataV3Chart from "./DataV3Chart";
import DataV5Chart from "./DataV5Chart";
import DataV6Chart from "./DataV6Chart";
import DataV7Chart from "./DataV7Chart";
import DataV9Chart from "./DataV9Chart"; 

const CreateView = () => {

  const [selected, setSelected] = React.useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };

  const v1_a = <DataV1AnnualChart />;
  const v1_m = <DataV1MonthlyChart />;
  const v3 = <DataV3Chart />;
  const v5 = <DataV5Chart />;
  const v6 = <DataV6Chart />;
  const v7 = <DataV7Chart />;
  const v9 = <DataV9Chart />;

  let type = null;
  
  //This will be used to create set of options that user will see 
  let options = null;

  if (selected === "V1 Annual Data") {
    type = v1_a;
  } else if (selected === "V1 Monthly Data") {
    type = v1_m;
  } else if (selected === "V3 Data") {
    type = v3;
  } else if (selected === "V5 Data") {
    type = v5;
  } else if (selected === "V6 Data") {
    type = v6;
  } else if (selected === "V7 Data") {
    type = v7;
  } else if (selected === "V9 Data") {
    type = v9;
  }
  
  if (type) {
    options = type;
  }

  return (
    <form>
      <div className="row">
        <div className="selectionbar">
        <label className="labels">Select chart data:</label>
            <select onChange={onChange} className="data-select"> 
              <optgroup label="Select data"></optgroup> 
              <option>V1 Annual Data</option> 
              <option>V1 Monthly Data</option>
              <option>V3 Data</option>
              <option>V5 Data</option>
              <option>V6 Data</option>
              <option>V7 Data</option>
              <option>V9 Data</option>
            </select>
            <SaveView />
        </div>
        <div className="column">
          <h1>Create visualization view</h1>
          {options}
        </div>
      </div>
    </form>
  );
    
}

export default CreateView;