import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Buyflow from './buyflow/Buyflow'
import NotFound from './error/NotFound'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route exact path="/buy/insurance/:type">
            <Buyflow />
          </Route>
          <Route exact path="/">
            <p>Welcome to Getsafe's Insurance</p>
            <div>
              <Link to="/buy/insurance/developer">Get started Developer Insurance!</Link>
            </div>
            <div>
              <Link to="/buy/insurance/designer">Get started Designer Insurance!</Link>
            </div>
          </Route>
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
