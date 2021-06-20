import React from 'react'
import "./styles.scss"

function Top5Table() {

    const PLACEHOLDER = [
      {
         "company": "Tesla",
         "sentiment": 10000,
         "trade": "bull"
      },
      {
         "company": "Tesla",
         "sentiment": 10000,
         "trade": "bull"
      },
      {
         "company": "Tesla",
         "sentiment": 10000,
         "trade": "bull"
      },
      {
         "company": "Tesla",
         "sentiment": 10000,
         "trade": "bull"
      }

   ]


   return (
      <div className="table__container">
       <table className="top5__table" cellspacing="0">
         <tr className="top5__header">
            <th>#</th>
            <th>Stock</th>
            <th>Sentiment</th>
            <th>Trade</th>
         </tr>
         <tbody >
            {PLACEHOLDER.map((p, index) =>
               <tr key={index} className="top5__table__row">
                  <td>
                     {index}
                  </td>
                  <td>
                     {p.company}
                  </td>
                  <td>
                     {p.sentiment}
                  </td>
                  <td>
                     {p.trade}
                  </td>
               </tr>
            )}
         </tbody>
         </table>
      </div>
   )
}

export default Top5Table
