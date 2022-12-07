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
      <h2>Description text</h2>
      <textarea id="container" rows="4" cols="50"></textarea>
      <button id="save">Save</button>
      <div className="link">
        Data source:&nbsp;
        <a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx">
          https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx
        </a>
      </div>
      <DataV7Chart />
      <DataV6Chart />
      <DataV5Chart />
      <DataV3Chart />
      <div className="link">
        Data sources:&nbsp;
        <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">
          https://gml.noaa.gov/ccgg/about/co2_measurements.html
        </a>
        ,&nbsp;
        <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat">
          https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat
        </a>
        ,&nbsp;
        <a href="https://www.southampton.ac.uk/~cpd/history.html">
          https://www.southampton.ac.uk/~cpd/history.html
        </a>
      </div>
      <DataV1AnnualChart />
      <div className="link">
        Data sources:&nbsp;
        <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">
          https://www.metoffice.gov.uk/hadobs/hadcrut5/
        </a>
        ,&nbsp;
        <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">
          https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt
        </a>
      </div>
      <DataV1MonthlyChart />
      <div className="link">
        Data sources:&nbsp;
        <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">
          https://www.metoffice.gov.uk/hadobs/hadcrut5/
        </a>
        ,&nbsp;
        <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">
          https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt
        </a>
      </div>
    </div>
  );
}

export default App;
