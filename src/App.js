import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import { FirstPerson, SecondPerson, PersonSwitcher } from './components'

function App() {
  return (
    <Router>
      <PersonSwitcher />
      <Switch>
        <Route exact path='/' component={FirstPerson} />
        <Route exact path='/first-person' component={FirstPerson} />
        <Route exact path='/second-person' component={SecondPerson} />
      </Switch>
    </Router>
  )
}

export default App
