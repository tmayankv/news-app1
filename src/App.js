import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <Router>
      <Navbar/>
      <Switch>
      
      <Route exact path='/'><News key="general" className="d-flex" category='general'></News></Route>
      <Route exact path='/sports'><News key="sports" className="d-flex" category='sports'></News></Route>
      <Route exact path='/business'><News key="business" className="d-flex" category='business'></News></Route>
      <Route exact path='/technology'><News key="technology" className="d-flex" category='technology'></News></Route>
      <Route exact path='/science'><News key="science" className="d-flex" category='science'></News></Route>
      <Route exact path='/entertainment'><News key="entertainment" className="d-flex" category='entertainment'></News></Route>
      <Route exact path='/health'><News key="health" className="d-flex" category='health'></News></Route>
  
       
      </Switch>
      </Router>
      
      )
    }
  }
  // console.log(this.category)

export default App