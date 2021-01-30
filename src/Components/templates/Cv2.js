import React,{useState,useContext,useRef} from 'react'
import {Data} from '../context.js'
import '../ResumeStyles/cv2style.css'

function Cv2() {

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
        <div >
            <div  style={{paddingBottom:'10vh',paddingTop:'5vh',width:'210mm',margin:'auto'}} className="paper">
                <div className="side">
                    <h1>{contact.firstname} {contact.lastname}</h1>
                    <p>{contact.profession}</p>
                    <h3>Contact</h3>
                    <h5>City</h5>
                    <p>{contact.city}</p>
                    <h5>Phone</h5>
                    <p>{contact.phone}</p>
                    <h5>Email</h5>
                    <p>{contact.email}</p>
                    <h5>LinkIn</h5>
                    <p>{contact.state}</p>
                   
                    <h3>Skills</h3>
                    {job.map(item=>(
                        <div>
                            <p>{item.name}</p>  
                        </div>
                    ))}
                    
                </div>
                <div className="main">
                    <p>{briefSummary.summary}</p>
                    <h1>Work History</h1>
                    {work.map(item =>(
                    <div className="cv2-work-exp">
                        <div className="cv2-work-date">
                            <p>{item.startdate} - {item.enddate || item.stillhere }</p>    
                        </div>
                        <div className="cv2-work-history">
                            <h5>{item.title}</h5>
                            <p>{item.employer}</p>
                            <p>{item.state}</p>
                        </div>
                    </div> 
                    ))}
                    <h1>Education</h1>
                    {education.map(item=>(
                       <div className="cv2-education">
                        <div className="cv2-education-date">
                            <p> {item.start} - {item.end}</p>
                        </div>
                        <div className="cv2-education-history">
                            <h5>{item.degree} in {item.field}</h5>
                            <p>{item.school},{item.location}</p>
                        </div>  
                    </div> 
                    ))}
                    
                   
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}} className="but">
                <button className='print' onClick={()=>window.print()}>Download Resume</button>
            </div>
        </div>
    )
}

export default Cv2
