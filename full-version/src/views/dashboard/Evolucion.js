import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";
import { useSelector } from "react-redux";
import moment from 'moment'
import 'moment/dist/locale/es';

import "@styles/react/dashboard/dashboard-evolution.scss";
import "react-circular-progressbar/dist/styles.css";


const Evolucion = ({ lastEvolution }) => {
   Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
   const evolutions = useSelector((state) => state.evolution);
   const [labelDates, setLabelDates] = useState([]);
   const [labelData, setLabelData] = useState([]);
   
   moment.locale("es")

   useEffect(() => {


      evolutions.map((date) => {
         
         setLabelDates(dates => 
            [...dates, moment(date.fecha).format("MMM").charAt(0).toUpperCase()
            .concat(moment(date.fecha).format("MMMM DD").slice(1))])  
         setLabelData(data => [...data, date.peso])  
      });



   }, [evolutions]);


   const data = {
      labels: labelDates,
      datasets: [
         {
            label: null,
            data: labelData,
            fill: false,
            tension: 0.2,
            borderColor: "#24ac90",
            borderWidth: 4,
            pointBackgroundColor: '#000000',
            pointBorderColor: '#000000'
         },
      ],
   };

   const options = {
      scales: {
         y: {
            grid: {
               display: false
            }
         },
         x: {
            grid: {
               display: false
            }
         },
      },
      animations: {
         tension: {
           duration: 2000,
           easing: 'linear',
           from: 0.5,
           to: 0,
           loop: true
         }
      },
      plugins: {
         legend: {
           display: false
         }
      },
      layout: {
         padding: 1
      }
   }

   return (
      <div>
         <h4 className="principal-title">Evolucion Tratamiento Nutricional</h4>
         <div className="container-progress">
            <div className="container-progress-chart">
               <h4 className="container-progress-chart-title">Grasa</h4>
               <CircularProgressbar
                  value={lastEvolution.p_grasa}
                  text={`${lastEvolution.p_grasa}%`}
                  styles={buildStyles({
                     pathColor: "#24ac90",
                     textColor: "#000000",
                     textSize: "1rem",
                     pathTransitionDuration: 2,
                     strokeLinecap: "butt",
                  })}
               />
               <h5 className="container-progress-chart-description">Grasa Ideal:</h5>
            </div>

            <div className="container-progress-chart">
               <h4 className="container-progress-chart-title">IMC</h4>
               <CircularProgressbar
                  value={lastEvolution.imc}
                  text={`${lastEvolution.imc}%`}
                  styles={buildStyles({
                     pathColor: "#c074ad",
                     textColor: "#000000",
                     textSize: "1rem",
                     pathTransitionDuration: 2,
                     strokeLinecap: "butt",
                  })}
               />
               <h5 className="container-progress-chart-description">IMC Ideal:</h5>
            </div>

            <div className="container-progress-chart">
               <h4 className="container-progress-chart-title">Masa Muscular</h4>
               <CircularProgressbar
                  value={lastEvolution.p_masa}
                  text={`${lastEvolution.p_masa}%`}
                  styles={buildStyles({
                     pathColor: "#c2d45b",
                     strokeLinecap: "butt",
                     textColor: "#000000",
                     textSize: "1rem",
                     pathTransitionDuration: 2,
                  })}
               />
               <h5 className="container-progress-chart-description">Masa Muscular Ideal:</h5>
            </div>
         </div>
         <h4>Evolucion De Peso</h4>
         <Line data={data} options={options}/>
      </div>
   );
};

export default Evolucion;
