import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow from './buyflow/Buyflow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance/:type">
            <Buyflow />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Insurance</p>
            <div>
              <Link to="/buy/insurance/developer">Get started Developer Insurance!</Link>
            </div>
            <div>
              <Link to="/buy/insurance/designer">Get started Designer Insurance!</Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
