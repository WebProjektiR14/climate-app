import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

export default class DataV1AnnualChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  chart1Data: {},
      //  chart2Data: {}
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/datav1ga").then((res) => {
      this.setState({ chart1Data: res.data });
    });

    axios.get("http://localhost:8080/datav1na").then((res) => {
      this.setState({ chart2Data: res.data });
    });

    axios.get("http://localhost:8080/datav1sa").then((res) => {
      this.setState({ chart3Data: res.data });
    });
    axios.get("http://localhost:8080/datav2").then((res) => {
      this.setState({ chart4Data: res.data });
    });
  }

  render() {
    const data = {
      datasets: [
        {
          label: "Global Annual (2000-year reconstruction)",
          data: this.state.chart4Data,
          borderColor: " #4d4d4d",
          backgroundColor: "#4d4d4d",
          parsing: {
            xAxisKey: "date",
            yAxisKey: "anomaly",
          },
        },
        {
          label: "Global Annual",
          data: this.state.chart1Data,
          borderColor: "black",
          backgroundColor: "black",
          parsing: {
            xAxisKey: "date",
            yAxisKey: "anomaly",
          },
        },
        {
          label: "Northern Hemisphere Annual",
          data: this.state.chart2Data,
          borderColor: "rgb(127, 98, 199)",
          backgroundColor: "rgb(127, 98, 199)",
          parsing: {
            xAxisKey: "date",
            yAxisKey: "anomaly",
          },
        },
        {
          label: "Southern Hemisphere Annual",
          data: this.state.chart3Data,
          borderColor: "rgb(214, 98, 73)",
          backgroundColor: "rgb(214, 98, 73)",
          parsing: {
            xAxisKey: "date",
            yAxisKey: "anomaly",
          },
        },
      ],
    };

    const options = {
      scales: {
        x: { title: { display: true, text: "Year" } },
        y: { title: { display: true, text: "Anomaly (deg C)" } },
      },
      responsive: true,
      pointRadius: 1,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: " Moberg, A., et al. 2005.2,000-Year Northern Hemisphere Temperature Reconstruction. IGBP PAGES/World Data Center for Paleoclimatology Data Contribution Series # 2005-019. NOAA/NGDC Paleoclimatology Program, Boulder CO, USA.",
        },
      },
    };

    return (
      <div
        style={{
          width: "90%",
          align: "",
          paddingTop: "100px",
        }}
      >
        <h1>
          Global historical surface temperature anomalies from January 1850
          onwards (Annual data)
        </h1>
        <Line options={options} data={data} />
      </div>
    );
  }
}
