import React,{useState,useContext,useRef} from 'react'
import {Data} from '../context.js'
import '../ResumeStyles/Rstyles.css'


function Cv() {
    //contactapi
    const {contactapi} = useContext(Data);
    const [contact,setContact] = contactapi

    //workapi
    const {workapi} = useContext(Data);
    const [work,setWork] = workapi

    // educationapi
    const {educationapi} = useContext(Data);
    const [education,setEducation] = educationapi

    // skillsapi

    const {skillsapi} = useContext(Data);
    const [job,setJob] = skillsapi

    // Summary
    const {summaryapi} = useContext(Data);
    const [briefSummary, setBriefSummary] = summaryapi


    return (
        <div style={{paddingBottom:'10vh',width:'210mm',margin:'auto'}}>
            
            {/* <h1>{contact.firstname}</h1>
            <h1>{contact.lastname}</h1>
            <h1>{contact.profession}</h1>
            <h1>{contact.city}</h1>
            <h1>{contact.state}</h1>
            <h1>{contact.phone}</h1>
            <h1>{contact.email}</h1> 
            
            {work.map(item =>(
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.employer}</h1>
                    <h1>{item.city}</h1>
                    <h1>{item.state}</h1>
                    <h1>{item.startdate}</h1>
                    <h1>{item.enddate}</h1>
                    <h1>{item.stillhere}</h1>
                </div>
               
            ))}
            {education.map(item =>(
                <div>
                   <h1>{item.school}</h1>
                    <h1>{item.location}</h1>  
                    <h1>{item.degree}</h1> 
                    <h1>{item.field}</h1> 
                    <h1>{item.start}</h1> 
                    <h1>{item.end}</h1> 
                </div>
                
            ))}
            {job.map(item =>{return(
                <h1>{item.name}</h1>
            )})} */}
            <div className="nav">
                <h1>{contact.firstname} {contact.lastname}</h1>
                <p>{contact.profession}</p>
            </div>
            <div className="summary-contact">
                <div className="summary">
                    <p>{briefSummary.summary}</p>
                </div>
                <div className="contact">
                    <h1>CONTACT</h1>
                    <span>
                        <h3>Phone:</h3>
                        <p> {contact.phone}</p>
                    </span>
                    <span>
                        <h3>Email:</h3>
                        <p>{contact.email}</p>
                    </span>
                   
                    <h3>LinkedIn:</h3>
                    <p>{contact.state}</p>
                    <span>
                        <h3>City:</h3>
                        <p> {contact.city}</p>
                    </span>
                    
                </div>
            </div>
            <div className="work-exp">
                <h1>WORK-EXPERIENCE</h1>
                {work.map(item=>(
                    <div className="exp">
                        <div className="date">
                            {item.startdate} - {item.enddate || item.stillhere }
                        </div>
                        <div className="workcv">
                            <h2>{item.employer}</h2>
                            <h5>{item.title}</h5>
                            <p>{item.state}</p>
                           
                        </div>
                    </div>
               ))}
            </div>
            <div className="educationcv">
                <h1>EDUCATION</h1>
                {education.map(item =>(
                    <div className="edu">
                        <div className="edudate">
                            {item.start} - {item.end}
                        </div>
                        <div className="school">
                            <h2>{item.degree} in {item.field}</h2>
                            <h5>{item.school}</h5>
                            <p>{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="skillcv">
                <h1>Skills</h1>
                {job.map(item=>(
                    <div className='skillbox'>
                        <li>{item.name}</li>
                    </div>
                ))}
            </div>
            
            <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}} className="but">
                <button className='print' onClick={()=>window.print()}>Download Resume</button>
            </div>
        </div>
    )
}


export default Cv
