import React from 'react'
import {Link} from "react-router-dom"
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import Button from '@material-ui/core/Button';
import "./styles.scss"

function Top5Table() {

   const PLACEHOLDER = require("../../default_data/home_top5.json")

   return (
      <div className="table__container">
       <table className="top5__table" cellspacing="0">
         <tr className="top5__header">
            <th>#</th>
            <th>Stock</th>
            <th>Bull Sentiment</th>
            <th>Bear Sentiment</th>
            <th>Price</th>
            <th></th>
         </tr>
         <tbody >
            {PLACEHOLDER.top5.map((p, index) =>
               <tr key={index} className="top5__table__row">
                  <td>
                     {index}
                  </td>
                  <td>
                     {p.ticker}
                  </td>
                  <td>
                     {p.trend_up}
                     <TrendingUpIcon className="top5__icon bull"/>
                  </td>
                  <td>
                     {p.trend_down}
                     <TrendingDownIcon className="top5__icon bear"/>
                  </td>
                  <td>
                     {p.current_price}
                  </td>
                  <td>
                     <Link>
                        <Button variant="contained" color="primary" className="top5__button">View</Button>
                     </Link>
                  </td>
               </tr>
            )}
         </tbody>
         </table>
      </div>
   )
}

export default Top5Table
