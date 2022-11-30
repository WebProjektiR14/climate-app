import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from 'axios';


export default class DataV1GAChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chart1Data: {},
            chart2Data: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/datav1ga')
            .then(res => {
                this.setState({chart1Data: res.data});
            })

        axios.get('http://localhost:8080/datav1na')
            .then(res => {
                this.setState({chart2Data: res.data});
            })
    }

    render() {
        const data = {
            datasets: [{
                label: "V1 GA",
                data: this.state.chart1Data,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },{
                label: "V1 NA",
                data: this.state.chart2Data,
                borderColor: "rgb(255, 99, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            
            parsing: {
                xAxisKey: "date",
                yAxisKey: "anomaly",
                },
                 pointRadius: 1,
            },
            ],
        };
        
        const options = {
            responsive: true,
            plugins: {
                legend: {
                position: "top",
                },
                title: {
                display: true,
                text: "V1",
                },
            },
         
        };

        return (
            <div style={{ width: "1000px" }}>
                <h1>Data V1</h1>
                <Line options={options} data={data} />
            </div>
            );
    }
}


