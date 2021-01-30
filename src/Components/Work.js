import React,{useState,useContext,useEffect} from 'react'
import {Data} from './context.js'
import check from './images/check.svg'
import {Link} from 'react-router-dom'
import './styles.css'

function Work() {

    // work history state
    const [job, setJob] = useState( localStorage.getItem('job') ||'');
    const [employer, setEmployer] = useState(localStorage.getItem('employer') || '');
    const [city, setCity] = useState(localStorage.getItem('city') ||'');
    const [state,setState] = useState(localStorage.getItem('state') ||'');
    const [startDate,setStartDate] = useState(localStorage.getItem('startdate') || '');
    const [endDate, setEndDate] = useState(localStorage.getItem('enddate') ||'');
    const [stillHere, setStillHere] = useState('');

    // work context

    const {workapi} = useContext(Data);
    const [work,setWork] = workapi

    // currently works here state
    const [next, setNext] = useState(true);


    const getJob = e =>{
        setJob(
            e.target.value
        )
    }

    const getEmployer = e =>{
        setEmployer(
            e.target.value
        );
    }

    const getCity = e =>{
        setCity(
            e.target.value
        )
    }

    const getState = e =>{
        setState(
            e.target.value
        )
    }

    const getStartDate = e =>{
        setStartDate(
            e.target.value
        )
    }

    const getEndDate = e =>{
      setEndDate(
          e.target.value
      )
        
    }

    const getCurrent = e =>{
        setStillHere(
            'Present'
        )
        if(endDate !== ''){
            alert('You already chose a end date')
        }
    }

    // Submit Button and save feature

    const [click,setClick] = useState(false);

    const submit = e =>{
        if(job !== '' && employer !=='' && city !=='', state !=='' && startDate !=='' && endDate  || stillHere !== ''){
        setClick(true)
        setNext(false)
        }else{
            alert('Some fields are empty')
        }

        
    }
    

    
 

    // add to work conxt

    const addWork = e =>{
        e.preventDefault();
        setWork([...work,{title:job,employer:employer,city:city,state:state,startdate:startDate,enddate:endDate || stillHere }]);
    }

    const scrollToTop = () =>{
        window.scrollTo({
            top:'0vh',
            behavior:'smooth'
            
        })
        setJob('');
        setEmployer('');
        setCity('');
        setState('');
        setStartDate('');
        setEndDate('');
        
        setClick(false)
    }

    // Add work details to local storage
    useEffect(()=>{
        localStorage.setItem('job',job);
        localStorage.setItem('employer',employer);
        localStorage.setItem('city',city);
        localStorage.setItem('state',state);
        localStorage.setItem('startdate',startDate);
        localStorage.setItem('enddate',endDate);

    })


    return (
        <div>
            <div className="work">
                <h3>Work History</h3>
                <p>Let's know about your work history starting from your latest job.</p>
                <form onSubmit={addWork} >
                    <label htmlFor="">Job Title</label>{stillHere}
                    <input value={job} name='job' onChange={getJob} type="text" required />
                    <label htmlFor="">Employer</label>
                    <input value={employer} name='job' onChange={getEmployer} type="text" required />
                    <label htmlFor="">City</label>
                    <input value={city} name='city' onChange={getCity} type="text" required />
                    <label htmlFor="">Work Details</label>
                    <textarea placeholder='Describe your responsibilities during your time on this job' value={state} name='state' onChange={getState} type="text" required />
                    <label htmlFor="">Start Date</label>
                    <input value={startDate} name='date' onChange={getStartDate} type="date" required />
                    <label htmlFor="">End Date</label>
                    <input  value={endDate} name='date' onChange={getEndDate} type="date"/>
                    <div className="check-box">
                        <input onChange={getCurrent} type="checkbox"/>
                         <p>I currently work here.</p>
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} className="butdi">
                        <button onClick={submit} className='savebut'>Save</button> 
                        <img className={click ? 'check active' : 'check'} src={check} alt=""/>
                    </div>
                </form>
                <p onClick={scrollToTop} className='add' >+ Add more work history</p>
                <div className="butdiv">
                    <Link to='/contact'><button className='backbut'>Back</button></Link>
                    <Link to='/education'><button disabled={next} className='nextbut'>Next : Education</button></Link>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Work
