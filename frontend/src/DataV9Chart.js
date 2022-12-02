import React from "react";
import { useEffect, useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from 'axios';

function DataV9Chart() {

const data = {
    labels: ['Road','Aviation','Rail','Pipeline','Ship','Residential','Commercial',
            'Iron & Steel','Non-ferous metals','Machinery','Food and tobacco','Paper,pulp & printing',
            'Chemical & petrochemical (energy','Other industry','Energy in Agri & Fishing',
            'Unallocated fuel combustion','Coal','Oil & Natural Gas','Cement','Chemical & petrochemical (industrial',
            'Livestock & Manure','Rice Cultivation','Agricultural Soils','Crop Burning','Forest Land',
            'Cropland','Grassland','Landfills','Wastewater'
],
    datasets: [
        {
            label: 'Share of global greenhouse gas emissions (%)',
            data: [11.9,1.9,0.4,0.3,1.7,10.9,6.6,7.2,0.7,0.5,1,0.6,3.6,10.6,
            1.7,7.8,1.9,3.9,3,2.2,5.8,1.3,4.1,3.5,2.2,1.4,0.1,1.9,1.3],
            borderColor: ['white'],
            backgroundColor: ['#FF6A4D',
            '#51E88F',
            '#66A8FF',
            '#BB51E8',
            '#DFE53B' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
        }
        
    ]
}

const options = {
    plugins: {
        title: {
            display: true,
            text: 'V9',
            responsive:true,
            animation:{
                animateScale: true,
                color: true            }
        }
    }
    
}
    return (
        <div style={{ width: "60%", align:"" }}>
            <h1>Share of global greenhouse gas emissions by sector</h1>
           <Doughnut data={data} options={options} />
        </div>
    )
}

export default DataV9Chart