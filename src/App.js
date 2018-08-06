import React from 'react';
import PortfolioFixed from './components/PortfolioFixed.js';
import PortafolioContent from './components/PortfolioContent.js';

class App extends React.Component{
  render(){
    return(
      <div id="app-container" >
        <PortafolioContent />
        <PortfolioFixed />
      </div>
    );
  }
}


export default App;
