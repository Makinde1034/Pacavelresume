import React,{useState,useContext,useEffect} from 'react'
import check from './images/check.svg'
import {Data} from './context.js'
import {Link} from 'react-router-dom'

function Education() {

    // education state
    const [name, setname] = useState(localStorage.getItem('name') || '');
    const [location, setLocation] = useState(localStorage.getItem('location') || '');
    const [degree, setDegree] = useState(localStorage.getItem('degree') || '');
    const [field, setField] = useState(localStorage.getItem('field') || '');
    const [start, setStart] = useState(localStorage.getItem('start') || '');
    const [grad, setGrad] = useState(localStorage.getItem('grad') || '');
    const [stillHere, setStillHere] = useState('');

    // education context 
    
    const {educationapi} = useContext(Data);
    const [education,setEducation] = educationapi

    function getName(e){
        setname(
            e.target.value
        );
    }

    function getLocation(e){
        setLocation(
            e.target.value
        );
    }

    function getDegree(e){
        setDegree(
            e.target.value
        );
    }

    function getField(e){
        setField(
            e.target.value
        )
    }

    function getStart(e){
        setStart(
            e.target.value
        );
    }

    function getGrad(e){
        setGrad(
            e.target.value
        );
    }

    const getCurrent = e =>{
        setStillHere(
            'Present'
        )
        if(grad !== ''){
            alert('You already chose a end date')
        }
    }

    // add data to education api
    function addEdu(e){
        e.preventDefault();
        setEducation(
            [...education,{school:name,location:location,degree:degree,field:field,start:start,end:grad || stillHere}]
        )
    }

    // submit area

    const [click, setClick] = useState(false);
    const [next,setNext] = useState(true);

    const submit = e =>{
        if(name !=='' && location !=='' && degree !== '' && field !=='' && start!=='' && grad || stillHere !==''){
             setClick(true)
             setNext(false)
        }else{
            alert('Some fields are empty')
        }

        
       
    }

    // new education
    const scrollToTop =e =>{
        window.scrollTo({
            top:'0vh',
            behavior:'smooth'
        })

        setClick(
            false
        )

        setname('');
        setLocation('');
        setDegree('');
        setField('');
        setStart('');
        setGrad('');
    }

    useEffect(() => {
        localStorage.setItem('name',name);
        localStorage.setItem('location',location);
        localStorage.setItem('degree',degree);
        localStorage.setItem('field',field);
        localStorage.setItem('start',start);
        localStorage.setItem('grad',grad);
    })


    return (
        <div>
            <div className="education">
                <h3>Education</h3>
                <p>Tell us about your education. Include all schools you've attended.</p>
            
                <form onSubmit={addEdu} action="">
                    <label htmlFor="">School Name</label>
                    <input value={name} name='school' onChange={getName} type="text"/>
                    <label htmlFor="">School Location</label>
                    <input value={location} name='location' onChange={getLocation}  type="text"/>
                    <label htmlFor="">Degree</label>
                    <select value={degree} onChange={getDegree} name="degree" id="">
                        <option value="">Choose</option>
                        <option value="High School Diploma">High School Diploma</option>
                        <option value="GED">GED</option>
                        <option value="Associate of Arts">Associate of Arts</option>
                        <option value="Associate of Science">Associate of Science</option>
                        <option value="Associate of Applied Science">Associate of Applied Science</option>
                        <option value="Bachelor of Arts">Bachelor of Arts</option>
                        <option value="Bachelor of Science">Bachelor of Science</option>
                        <option value="BAA">BAA</option>
                        <option value="Master of Arts">Master of Arts</option>
                        <option value="Master of Science">Master of Science</option>
                        <option value="MBA">MBA</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="J.D">J.D.</option>
                        <option value="M.D">M.D</option>
                        <option value="">M.D</option>
                        <option value="Ph.D">Ph.D</option>
                        <option value="No Degree">No Degree</option>
                    </select>
                    <label htmlFor="">Field Of Study</label>
                    <input value={field} name='field' onChange={getField} type="text"/>
                    <label htmlFor="">Start Date</label>
                    <input value={start} name='Start date' onChange={getStart} type="date"/>
                    <label htmlFor="">Graduaion Date</label>
                    <input  value={grad} name='Graduation' onChange={getGrad} type="date"/>
                    <div className="check-box">
                        <input onChange={getCurrent} type="checkbox"/>
                        <p>I currently school here.</p>
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} className="butdi">
                        <button onClick={submit} className='savebut'>Save</button> 
                        <img className={click ? 'check active' : 'check'} src={check} alt=""/>
                    </div>
                </form>
                <p onClick={scrollToTop} className='add' >+ Add more education</p>
                <div className="butdiv">
                    <Link to='/work'><button className='backbut'>Back</button></Link>
                    <Link to='/skills'><button disabled={next}  className='nextbut'>Next : Skills</button></Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Education
