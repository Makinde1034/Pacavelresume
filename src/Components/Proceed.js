import React from 'react'
import man from './images/678.jpg'
import {Link} from 'react-router-dom'
import './styles.css'

function Proceed() {
    return (
        <div className='proceed'>
            
            <div className="proceed1">
                <h1>Get that job!</h1>
                <h3>Select a Template</h3>
                <p>First select a template of your choice to personalize your informations.</p>
                
                <h3>Enter Your Details</h3>
                <p>Type informations concerning you in the input.</p>
                <h3>Download</h3>
                <p>Finally! Get your resume.</p>
                <Link to='/contact'><button>Continue</button></Link>
            </div>
            <div className="proceed2">
                <img src={man}  alt=""/>
            </div>
        </div>
    )
}

export default Proceed
