
import './App.css';


//Type rcc for class based component

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <News pageSize={10}/>
      </div>
    )
  }
}

