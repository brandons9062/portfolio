import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="landingPageContainer">
        <div className="welcomeText">
            <div className="welcomeName">
                BRANDON SMITH
            </div>
            <div className="welcomeSubTitle">
                Fullstack Web Developer
            </div>
            <div className="welcomeSubTitle">
                <a href="https://www.linkedin.com/in/brandonjpsmith/">
                    Linkedin
                </a>  |  <a href="https://github.com/brandons9062">
                    GitHub
                </a>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
