import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

//tää ei aivan toimi

export default class DataV3Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("http://localhost:8080/datav3a").then((res) => {
      this.setState({ chart1Data: res.data });
    });

    axios.get("http://localhost:8080/datav3m").then((res) => {
      this.setState({ chart2Data: res.data });
    });

    axios.get("http://localhost:8080/datav4s1").then((res) => {
      this.setState({ chart3Data: res.data });
    });

    axios.get("http://localhost:8080/datav4s2").then((res) => {
      this.setState({ chart4Data: res.data });
    });

    axios.get("http://localhost:8080/datav4s3").then((res) => {
      this.setState({ chart5Data: res.data });
    });
    axios.get("http://localhost:8080/datav10").then((res) => {
      this.setState({ chart6Data: res.data });
    });
  }

  render() {
    const data = {
      datasets: [
        {
          label: "Annual C02",
          data: this.state.chart1Data,
          borderColor: "#09695F",
          backgroundColor: "#09695F",
          parsing: {
            xAxisKey: "year",
            yAxisKey: "co2",
          },
        },
        {
          label: "Monthly C02",
          data: this.state.chart2Data,
          borderColor: "#E0800B",
          backgroundColor: "#E0800B",
          parsing: {
            xAxisKey: "year",
            yAxisKey: "co2",
          },
        },
        {
          label: "DE08 Ice Core",
          data: this.state.chart3Data,
          borderColor: "#9D00DB",
          backgroundColor: "#9D00DB",
          parsing: {
            xAxisKey: "airAge",
            yAxisKey: "co2",
          },
        },
        {
          label: "DE08-2 Ice Core",
          data: this.state.chart4Data,
          borderColor: "#F2180C",
          backgroundColor: "#F2180C",
          parsing: {
            xAxisKey: "airAge",
            yAxisKey: "co2",
          },
        },
        {
          label: "DSS Ice Core",
          data: this.state.chart5Data,
          borderColor: "#25A2F5",
          backgroundColor: "#25A2F5",
          parsing: {
            xAxisKey: "airAge",
            yAxisKey: "co2",
          },
        },
        {
          label: "Human events",
          // data: this.state.chart6Data,
          borderColor: "blue",
          backgroundColor: "red",
          YAxisID: "events",
          parsing: {
            xAxisKey: "year",
            yAxisKey: "event",
          },
        },
      ],
    };

    const options = {
      scales: {
        x: {
          max: 2022,
          type: "linear",
          title: { display: true, text: "Year" },
        },
        y: { title: { display: true, text: "C02 Mixing Ratio" } },
      },
      responsive: true,

      pointRadius: 1,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "V3",
        },
      },
    };

    return (
      <div style={{ width: "90%", align: "" }}>
        <h1> Atmospheric CO2 measurements from Mauna Loa, 1958 onwards</h1>
        <Line options={options} data={data} />
      </div>
    );
  }
}
