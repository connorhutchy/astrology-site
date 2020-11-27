import DOB from './Components/DOB.jsx';
import logo from './logo.png';
import './App.css';
import arrows from './constellationArrow.png';
import { Component } from 'react';

export default class App extends Component{




  start(){

    var landingElement = document.getElementById("landing");
    landingElement.className = "landing_hidden";
    setTimeout(function(){landingElement.style.display="none"},4000);
    
    

    var dobElement = document.getElementById("dob");
        
    setTimeout(function(){document.getElementById("logo").className = "logo"; dobElement.className = "dob"},2000);
    

}

  render() {
    return (
    <div className="App">
      <header className="App-header">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="light"></div>

      <div className="landing_shown" id="landing">
      <img className="landing_logo" src={logo} alt="Horoscope"></img>

      <img className="arrow_landing" src={arrows} alt="Continue.." onClick={this.start}></img>
      </div>  

      <img id="logo" className="logo_hidden" src={logo} alt="Horoscope"></img>

      <DOB></DOB>


      </header>
    </div>
    )
  };
}

