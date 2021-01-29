import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import logo from './images/logo.png'

function Nav() {
    return (
        <div>
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
    );
}

export default Nav
