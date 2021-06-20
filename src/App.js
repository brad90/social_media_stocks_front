import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/nav"

import Home from "./views/Home"
import Login from "./views/Login"
import Dashboard from "./views/Dashboard"
import NoMatch from "./views/NoMatch"

import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    
    <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route component={NoMatch}/>
        </Switch>
      </Router>   
  );
}

export default App;