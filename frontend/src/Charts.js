import "./App.css";
import DataV1AnnualChart from "./DataV1AnnualChart";
import DataV5Chart from "./DataV5Chart";
import DataV1MonthlyChart from "./DataV1MonthlyChart";
import DataV3Chart from "./DataV3Chart";
import DataV6Chart from "./DataV6Chart";
import DataV7Chart from "./DataV7Chart";
import DataV9Chart from "./DataV9Chart";

function Charts() {
  return (
    <div className="Charts" style={{ backgroundColor: "#ffffff" }}>
      <DataV9Chart />
      <div className="link">
        Data source:&nbsp;
        <a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx">
          https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx
        </a>
      </div>
      <DataV7Chart />
      <div className="link">
        Data source:&nbsp;
        <a href="http://carolynsnyder.com/publications.php">
          http://carolynsnyder.com/publications.php
        </a>
        ,&nbsp;
        <a href="https://www.southampton.ac.uk/~cpd/history.html">
          https://www.southampton.ac.uk/~cpd/history.html
        </a>
        ,&nbsp;
        <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt">
          https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt
        </a>
      </div>
      <DataV6Chart />
      <div className="link">
        Data source:&nbsp;
        <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt">
          https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt
        </a>
      </div>
      <DataV5Chart />
      <div className="link">
        Data source:&nbsp;
        <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">
          https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2
        </a>
      </div>
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

export default Charts;
