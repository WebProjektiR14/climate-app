import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from 'axios';

//tää ei aivan toimi

export default class DataV3Chart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          //  chart1Data: {},
          //  chart2Data: {}
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8080/datav3a')
            .then(res => {
                this.setState({chart1Data: res.data});
            })

        axios.get('http://localhost:8080/datav3m')
            .then(res => {
                this.setState({chart2Data: res.data});
            })

        // axios.get('http://localhost:8080/datav4s1')
            .then(res => {
                this.setState({chart3Data: res.data});
            })
    }

    render() {
        const data = {
            datasets: [{

                label: "V3 Annual",
                data: this.state.chart1Data,
                borderColor: "black",
                backgroundColor: "black",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "co2",
                },
            },{
                label: "V3 Monthly",
                data: this.state.chart2Data,
                borderColor: "rgb(127, 98, 199)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                parsing: {
                    xAxisKey: "year",
                    yAxisKey: "co2",
                },
            },{
                label: "V4 set 1",
                data: this.state.chart3Data,
                borderColor: "rgb(214, 98, 73)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                parsing: {
                    xAxisKey: "airAge",
                    yAxisKey: "co2",
                },
            }

        ],
            
        };
        
        const options = {
            scales: {x:{title: {display:true, text: 'Year/Month'}}, 
            y:{title:{display:true, text: 'Anomaly (deg C)'}}},
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
            <div style={{ width: "90%", align:"" }}>
                <h1> Atmospheric CO2 measurements from Mauna Loa, 1958 onwards</h1>
                <Line options={options} data={data} />
            </div>
            );
    }
}