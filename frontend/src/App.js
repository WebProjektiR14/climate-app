import "./App.css";
import DataV1AnnualChart from "./DataV1AnnualChart";
import DataV5Chart from "./DataV5Chart";
import DataV1MonthlyChart from "./DataV1MonthlyChart";
import DataV3Chart from "./DataV3Chart";
import DataV6Chart from "./DataV6Chart";
import DataV7Chart from "./DataV7Chart";
import DataV9Chart from "./DataV9Chart";

function App() {
  return (
    <div className="App">
      <DataV9Chart />
      <DataV7Chart />
      <DataV6Chart />
      <DataV5Chart />
      <DataV3Chart />
      <DataV1AnnualChart />
      <DataV1MonthlyChart />
    </div>
  );
}

export default App;
