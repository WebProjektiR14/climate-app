import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

export default class DataV7Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("http://localhost:8080/datav6").then((res) => {
      this.setState({ chart1Data: res.data });
    });

    axios.get("http://localhost:8080/datav7").then((res) => {
      this.setState({ chart2Data: res.data });
    });

    axios.get("http://localhost:8080/datav10").then((res) => {
      this.setState({ chart3Data: res.data });
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
          yAxisID: "y",
          parsing: {
            xAxisKey: "gasAge",
            yAxisKey: "co2",
          },
        },
        {
          label: "Change in Global Average Surface Temperature",
          data: this.state.chart2Data,
          borderColor: "blue",
          backgroundColor: "blue",
          yAxisID: "anomaly",
          parsing: {
            xAxisKey: "year",
            yAxisKey: "temp",
          },
        },
        {
          label: "Human Evolution and Activities",
          data: this.state.chart3Data,
          borderColor: "transparent",
          backgroundColor: "red",
          pointHoverRadius: 10,
          pointRadius: 5,
          showLine: "false",
          parsing: {
            xAxisKey: "year",
            yAxisKey: "spot",
          },
        },
      ],
    };

    const options = {
      scales: {
        x: {
          max: 2001,
          reverse: false,
          type: "linear",
          title: {
            display: true,
            text: "Year",
          },
        },

        y: {
          title: {
            display: true,
            text: "C02 (ppm)",
          },
        },
        anomaly: {
          type: "linear",
          position: "right",

          title: {
            display: true,
            text: "Temperature change (C)",
            position: "right",
          },

          grid: {
            drawOnChartArea: false,
          },
        },
      },

      responsive: true,
      pointRadius: 1,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              if (context.dataset.label === "Human Evolution and Activities") {
                return context.dataset.data[context.dataIndex].event;
              }
              return context.dataset.label;
            },
          },
        },
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Carolyn W. Snyder, Evolution of global temperature over the past two million years. 2016, Nature. C. Patrick Doncaster, Timeline of the Human Condition. Bereiter, B., S. Eggleston, J. Schmitt, C. Nehrbass-Ahles, T. F. Stocker, H. Fischer, S. Kipfstuhl, J. Chappellaz. 2015.",
        },
      },
    };

    return (
      <div style={{ width: "90%", align: "", paddingTop: "100px" }}>
        <h1>Evolution of global temperature over the past two million years</h1>
        <Line options={options} data={data} />
      </div>
    );
  }
}
