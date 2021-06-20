import React from 'react'
import Buttom from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import "./styles.scss"

export default function index() {
   return (
      <div className="navbar">
         <p className="navbar__logo">Something</p>
         <div className="navbar__search">
            <input type="text" placeholder="Search For Stocks" />
            <SearchIcon className="navbar__search__icon"/>
         </div>
         <div className="navbar__options">
            <Buttom>Sign Up</Buttom>
         </div>
      </div>
   )
}
