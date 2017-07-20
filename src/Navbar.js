import React, {Component} from 'react'

class Navbar extends Component{
    
    render(){
        return (
            <nav className="navbar navbar-default sticky-top navSpacing">
                <div className="container-fluid navContainer">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#top">
                                    <h4>WELCOME</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#aboutMe">
                                    <h4>ABOUT ME</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#skills">
                                    <h4>SKILLS</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio">
                                    <h4>PORTFOLIO</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#contactMe">
                                    <h4>CONTACT ME</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;