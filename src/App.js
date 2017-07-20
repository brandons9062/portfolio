import React, { Component } from 'react';
import './App.css';

import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';

class App extends Component {
  render() {
    return (
      <div>
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
            <a name="aboutMe">
                <AboutMe />
            </a>
            <a name="skills">
                <Skills />
            </a>
            <a name="portfolio">
                <Portfolio />
            </a>
            <a name="contactMe">
                <ContactMe />
            </a>
      </div>
    
    );
  }
}

export default App;
