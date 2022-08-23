import './App.css';
import React, { Component } from 'react'
import PersonalInfo from './Components/PersonalInfo';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Resume from './Components/Resume';

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <div className='header'>
          <header> CV CREATOR </header>
        </div>
        <div className='main'>
          <div>
            <Resume/>
        </div>
      </div>
      </div>
    )
  }
}


export default App