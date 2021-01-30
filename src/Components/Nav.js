import React from 'react'
import Styles from './styles.css'
import {Link} from 'react-router-dom'
import logo from './images/logo.png'
import template from './images/tem1.png'
import template2 from './images/Cvtemplate2.png'

function Nav() {
    return (
        <div>
            <div  className="bound">
                <nav>
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h1>Pacavel<span style={{color:'#8ac926'}}>resume</span></h1>
                </div>
                
                <ul>
                    <li>About</li>
                    <Link to='/proceed'><button>Create Resume</button></Link>
                </ul>
                </nav>
                <div className="landing">
                    <h1>Create A Free and Awesome Resume</h1>
                    <h1>To Land Your Dream Job.</h1>
                    <p>Pacavel resume generator is a truly free resume creating platform. Designed to help people easily build a professional resume.</p>
                    <Link to='/proceed'><button>Create Resume</button></Link>
                </div>
            </div>
            
            <div className="templates">
                <h3>Beautiful Templates</h3>
                <div className="template-div">
                    <img src={template} alt=""/>
                    <img src={template2} alt=""/>
                </div>
               
            </div>
        </div>
    );
}

export default Nav
