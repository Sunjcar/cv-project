import './App.css';
import uniqid from 'uniqid'
import React, { Component } from 'react'

import PersonalInfo from './Components/PersonalInfo';
import Education from './Components/Education';
import Experience from './Components/Experience';


export class App extends Component {


  render() {
    return (
      <div>
        <div className='header'>
          <header> CV CREATOR </header>
        </div>
        <div className='main'>
          <div className='form'>
            <div>
              <h1>Fill In</h1>
                <PersonalInfo/>
                <Education/>
                <Experience/>
            </div>
            <div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}


export default App