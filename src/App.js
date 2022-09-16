import './App.css';
import React from 'react'
import Resume from './Components/Resume';
import Footer from './Footer';
import styledComponents from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      <Resume/>
      <Footer/>
    </Wrapper>
  )
}

export default App

const Wrapper = styledComponents.div`
display:flex;
min-height:100vh;
flex-direction:column;
justify-content:space-between`