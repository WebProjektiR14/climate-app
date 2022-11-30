import "./App.css";
import DataV1AnnualChart from "./DataV1AnnualChart";
import DataV5Chart from "./DataV5Chart";
import DataV1MonthlyChart from "./DataV1MonthlyChart";
import DataV3Chart from "./DataV3Chart";
import DataV6Chart from "./DataV6Chart";

function App() {
  return <div className="App"> 
  <DataV6Chart/>
  <DataV3Chart/>
  <DataV1AnnualChart/>
  <DataV1MonthlyChart/>
  <DataV5Chart/>
  </div>;
}

export default App;
