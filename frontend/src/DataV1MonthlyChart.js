import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from 'axios';


export default class DataV1MonthlyChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          //  chart1Data: {},
          //  chart2Data: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/datav1gm')
            .then(res => {
                this.setState({chart1Data: res.data});
            })

        axios.get('http://localhost:8080/datav1nm')
            .then(res => {
                this.setState({chart2Data: res.data});
            })

            axios.get('http://localhost:8080/datav1sm')
            .then(res => {
                this.setState({chart3Data: res.data});
            })
    }

    render() {
        const data = {
            datasets: [{

                label: "Global Monthly",
                data: this.state.chart1Data,
                borderColor: "black",
                backgroundColor: "black",
                parsing: {
                    xAxisKey: "date",
                    yAxisKey: "anomaly",
                },
            },{
                label: "Northern Hemisphere Monthly",
                data: this.state.chart2Data,
                borderColor: "rgb(127, 98, 199)",
                backgroundColor: "rgb(127, 98, 199)",
                parsing: {
                    xAxisKey: "date",
                    yAxisKey: "anomaly",
                },
            },{
                label: "Southern Hemisphere Monthly",
                data: this.state.chart3Data,
                borderColor: "rgb(214, 98, 73)",
                backgroundColor: "rgb(214, 98, 73)",
                parsing: {
                    xAxisKey: "date",
                    yAxisKey: "anomaly",
                },
            }

        ],

            
        };
        
        const options = {
            scales: {x: {title: {display:true, text: 'Year/Month'}}, 
            y:{title:{display:true, text: 'Anomaly (deg C)'}}},
            responsive: true,
            pointRadius: 1,
            plugins: {
                legend: {
                position: "top",
                },
                title: {
                display: true,
                text: "V1 annual",
                },
            },
         
        };

        return (
            <div style={{ width: "90%", align:"" }}>
                <h1>Global historical surface temperature anomalies from January 1850 onwards (Monthly data)</h1>
                <Line options={options} data={data} />
            </div>
            );
    }
}