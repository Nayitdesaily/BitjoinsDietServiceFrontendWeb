import React, { Fragment, useEffect, useState } from "react";
import Evolucion from "./Evolucion";
import { useSelector } from "react-redux";
import PlanDia from "./PlanDia";

const Dashboard = () => {
   const evolution = useSelector((state) => state.evolution);
   const [lastEvolution, setLastEvolution] = useState({});

   useEffect( () => {

      const latestEvolution = evolution.reduce((acc, item) => {
         if (acc.fecha > item.fecha) {
            return acc;
         } else {
            return item;
         }
      })

      setLastEvolution(latestEvolution);

   }, [evolution]);

   return (
      <Fragment>
         <div>
            <Evolucion lastEvolution={lastEvolution}/>
            <PlanDia />
         </div>
      </Fragment>
   );
};

export default Dashboard;
