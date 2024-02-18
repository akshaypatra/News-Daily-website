
import './App.css';


//Type rcc for class based component

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <NavBar/>
        <Routes>
            <Route  exact  index path="/" element={<News key="home" pageSize={9} country="in" category="general" />}/>
            <Route  exact  path="/Science" element={<News key="science" pageSize={9} country="in" category="science" />} />
            <Route  exact  path="/Business" element={<News key="business" pageSize={9} country="in" category="business" />} />
            <Route  exact  path="/General" element={<News key="general" pageSize={9} country="in" category="general" />} />
            <Route  exact  path="/Health" element={<News key="health" pageSize={9} country="in" category="health" />} />
            <Route  exact  path="/Sports" element={<News key="sports" pageSize={9} country="in" category="sports" />} />
            <Route  exact  path="/Entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" />} />
            <Route  exact  path="/Technology" element={<News key="technology" pageSize={9} country="in" category="technology" />} />
            
      </Routes>
          
          
        </BrowserRouter>
      </div>
    )
  }
}

