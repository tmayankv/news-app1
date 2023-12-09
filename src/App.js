import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar/>
      <Routes>
      <Route path='/' element={<News key="general" className="d-flex" category='general' />} />
          <Route path='/sports' element={<News key="sports" className="d-flex" category='sports' />} />
          <Route path='/business' element={<News key="business" className="d-flex" category='business' />} />
          <Route path='/technology' element={<News key="technology" className="d-flex" category='technology' />} />
          <Route path='/science' element={<News key="science" className="d-flex" category='science' />} />
          <Route path='/entertainment' element={<News key="entertainment" className="d-flex" category='entertainment' />} />
          <Route path='/health' element={<News key="health" className="d-flex" category='health' />} />
        </Routes>
      </HashRouter>
      
      )
    }
  }
  // console.log(this.category)

export default App