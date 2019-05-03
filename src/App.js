import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContainer from './containers/MainContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
