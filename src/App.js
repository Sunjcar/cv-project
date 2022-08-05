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
       count: 0
    }
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <div className='header'>
          <header> CV CREATOR </header>
        </div>
        <div className='main'>
          <div>
            <Resume/>
                {[...Array(this.state.count)].map((_, i) => <Experience key={i}/>)}
                <button className='jobButton' type='button' onClick={() => this.setState({count:count + 1})}> Add Job </button> 
                <button type='button' disabled={!count} onClick={() => this.setState({count:count - 1})}> Remove Job </button> 
        </div>
      </div>
      </div>
    )
  }
}


export default App