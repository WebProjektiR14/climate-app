import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

export default class DataV6Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  chart1Data: {},
      //  chart2Data: {}
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/datav6").then((res) => {
      this.setState({ chart1Data: res.data });
    });
  }

  render() {
    const data = {
      datasets: [
        {
          label: "CO2 (ppm)",
          data: this.state.chart1Data,
          borderColor: "#d279d2",
          backgroundColor: "#d279d2",
          parsing: {
            xAxisKey: "gasAge",
            yAxisKey: "co2",
          },
        },
      ],
    };

    const options = {
      scales: {
        x: { reverse: true, title: { display: true, text: "Year" } },
        y: { title: { display: false, text: "Anomaly (deg C)" } },
      },
      responsive: true,
      pointRadius: 1,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "V6",
        },
      },
    };

    return (
      <div style={{ width: "90%", align: "", paddingTop: "100px" }}>
        <h1>Ice core 800 000 year CO2 measurements</h1>
        <Line options={options} data={data} />
      </div>
    );
  }
}
