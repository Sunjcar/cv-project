import './App.css';
import React, { Component } from 'react'
import PersonalInfo from './Components/PersonalInfo';
import Education from './Components/Education';
import Experience from './Components/Experience';

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
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
                {[...Array(this.state.count)].map((_, i) => <Experience key={i}/>)}
                <button type='button' onClick={() => this.setState({count:this.state.count + 1})}> Add Job </button> 
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