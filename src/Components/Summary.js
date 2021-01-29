import React,{useState,useContext} from 'react'
import './styles.css'
import {Data} from './context'
import check from './images/check.svg'
import {Link} from 'react-router-dom'

function Summary() {

    const [summary, setSummary] = useState('');


    // summaryapi
    const {summaryapi} = useContext(Data)
    const [briefSummary,setBriefSummary] = summaryapi

    
    const getSummary = e =>{
        setSummary(e.target.value);
    }

    const submit = e =>{
        e.preventDefault();
        setBriefSummary({summary:summary});
    }

    //save feature

    const [click,setClick] = useState(false);

    const submitBut = e =>{
        if(summary !==''){
            setClick(true);
        }
        // if(summary.length < 20){
        //     alert('summary is too short. Summary should be at least 20 words.')
        // }
        
    }


    return (
        <div>
            <div className="about">
                <h3>Summary</h3>
                <p>Your summary let's employers know a liitle more about you and if you are right for the job.</p>
                <form onSubmit={submit}>
                    <label htmlFor="summary">Summary</label>
                    <textarea value={summary} onChange={getSummary} placeholder='E.g...Experienced Graphic designer with over ten years of experience in the design industry...' name="Summary" ></textarea>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} className="butdi">
                        <button onClick={submitBut} className='savebut'>Save</button> 
                        <img className={click ? 'check active' : 'check'}  src={check} alt=""/>
                    </div>
                </form>
                <div className="butdiv">
                    <Link to='/skills'><button className='backbut'>Back</button></Link>
                    <Link to='/cv'><button   className='nextbut'>Next : Skills</button></Link>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Summary
