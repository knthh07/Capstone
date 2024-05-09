import React from 'react';

import BarChart from "./BarChart";
import PieChart from "./PieChart";
import './dashboard.css';

const Dashboard = () => {
   return (
      <div className='dashboard'>

         <div className="container">
            <div className="firstContainer">
               <h3>CCIT</h3>
               <h4>5</h4>
            </div>
            <div className="secondContainer">
               <h3>COA</h3>
               <h4>6</h4>
            </div>
            <div className="thirdContainer">
               <h3>COE</h3>
               <h4>4</h4>
            </div>
            <div className="fourthContainer">
               <h3>COD</h3>
               <h4>9</h4>
            </div>
         </div>

         <div className='graphs'>
            <BarChart />
         </div>

         <div className='graphs2'>
            <PieChart />
         </div>

      </div>

   );
};

export default Dashboard;
