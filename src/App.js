import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Grid from './Components/Grid'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid />
      </div>
    )
  }
}

export default App
