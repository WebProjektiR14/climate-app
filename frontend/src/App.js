import "./App.css";
import DataV1AnnualChart from "./DataV1AnnualChart";
import DataV5Chart from "./DataV5Chart";
import DataV1MonthlyChart from "./DataV1MonthlyChart";

function App() {
  return <div className="App"> 
  <DataV1AnnualChart/>
  <DataV1MonthlyChart/>
  <DataV5Chart/>
  </div>;
}

export default App;
