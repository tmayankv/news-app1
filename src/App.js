import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <HashRouter>
      <Navbar/>
      <Switch>
      
      <Route exact path='/'><News key="general" className="d-flex" category='general'></News></Route>
      <Route exact path='/news-app1/sports'><News key="sports" className="d-flex" category='sports'></News></Route>
      <Route exact path='/news-app1/business'><News key="business" className="d-flex" category='business'></News></Route>
      <Route exact path='/news-app1/technology'><News key="technology" className="d-flex" category='technology'></News></Route>
      <Route exact path='/news-app1/science'><News key="science" className="d-flex" category='science'></News></Route>
      <Route exact path='/news-app1/entertainment'><News key="entertainment" className="d-flex" category='entertainment'></News></Route>
      <Route exact path='/news-app1/health'><News key="health" className="d-flex" category='health'></News></Route>
  
       
      </Switch>
      </HashRouter>
      
      )
    }
  }
  // console.log(this.category)

export default App