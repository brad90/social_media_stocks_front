import React, { useState } from 'react'
import FeedPublic from "../../components/feed/public"
import "./styles.scss"

function Dashboard() {

   const [feedOption, setFeedOption] = useState('home')

   const menuItems = ['Home', 'Wachlist']

   return (
      <div className="dashboard">
         <div className="dash__sidebar">
            <ul>
               {menuItems.map((item) =>
                  <a key={item} onClick={() => setFeedOption(item)}>
                     <li>{item}</li>
                  </a>
               )}
            </ul>
         </div>
         <div className="dash__feed">
            {feedOption == 'home' && <FeedPublic/>}
         </div>
      </div>
   )
}

export default Dashboard
