import React from 'react'
import template from './images/tem1.png'
import template2 from './images/Cvtemplate2.png'
import {Link} from 'react-router-dom'



function SelectTemplate() {
    return (
        <div className='select'>
            <h3>Choose a template</h3>
            <div className="select-temp">
                <Link to='/cv'><img src={template} alt=""/></Link>
                <Link to='/cv2'><img src={template2} alt=""/></Link>
            </div>
            
        </div>
    )
}

export default SelectTemplate
