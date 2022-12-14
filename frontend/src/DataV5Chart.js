import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

export default class DataV5Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/datav5").then((res) => {
      this.setState({ chartData: res.data });
    });
  }

  render() {
    const data = {
      datasets: [
        {
          label: "Co2 concentration (ppmv)",
          data: this.state.chartData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          //xAxisID: "Years",

          parsing: {
            xAxisKey: "airAge",
            yAxisKey: "co2",
          },
          pointRadius: 1,
        },
      ],
    };

    const options = {
      scales: { x: { title: { display: true, text: "Years BC" } } },
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: " Barnola, J.-M., D. Raynaud, C. Lorius, and N.I. Barkov. 2003. Historical CO2 record from the Vostok ice core.",
        },
      },
    };

    return (
      <div style={{ width: "90%", paddingTop: "100px" }}>
        <h1>Historical Co2 Records from the Vostok Ice Core</h1>
        <Line options={options} data={data} />
      </div>
    );
  }
}
