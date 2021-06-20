import React from 'react'
import "./styles.scss"

function index() {
   return (
      <div className="login">
         <form className="login_form">
            <input type="email"  required/>
            <input type="password" required/>
         </form>
      </div>
   )
}

export default index
