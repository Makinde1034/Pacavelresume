import React,{useState,useContext,useEffect} from 'react'
import {Data} from './context'
import {Link} from 'react-router-dom';
import check from './images/check.svg'


function Contact() {

    // Contact State
    const [firstName, setfirstName] = useState(localStorage.getItem('firstname') || '');


    
    const [lastName, setlastName] = useState(localStorage.getItem('lastname') || '');
    const [prof, setprof] = useState(''  || localStorage.getItem('prof'));
    const [city, setcity] = useState(localStorage.getItem('city')  || '');
    const [state, setState] = useState(localStorage.getItem('state')|| '');
    const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '')
    
    // context api
    const {contactapi} = useContext(Data);
    const [contact,setContact] = contactapi 

    //submit button 
    const [click,setClick] = useState(false)

    // next button state
    const [next, setNext] = useState(true);

    const getFirstName =(e)=>{
        setfirstName(
            e.target.value
        )
    }

    const getLastName =(e)=>{
        setlastName(
            e.target.value
        )
    }

    const getProf = e =>{
        setprof(
            e.target.value
        )
    }

    const getCity = e =>{
        setcity(
            e.target.value
        )
    }

    const getState = e =>{
        setState(
            e.target.value
        )
    }

    const getPhone = e =>{
        setPhone(
            e.target.value
        )
    }

    const getEmail = e =>{
        setEmail(
            e.target.value
        )
    }

    //Add contact
    const addContact = e =>{
        e.preventDefault()
        setContact({firstname:firstName, lastname:lastName, profession:prof, city:city, state:state, phone:phone, email:email})
       setfirstName(firstName);
        setClick(true)
        // localStorage.setItem('mydata',{firstName})
    }

    const submit = e =>{
        // setClick(
        //     !click
        // )
        if(firstName  !== '' && lastName !== '' && prof !== '' && city !== '' && state !== '' && phone !== '' && email !== ''){
            setClick(true);
            setNext(false);
            
        }else{
            alert('Some fields are still blank'); 
        }

    }

    //  Storing data in local storage

    useEffect(()=>{
        localStorage.setItem('firstname',firstName);
        localStorage.setItem('lastname',lastName);
        localStorage.setItem('prof',prof);
        localStorage.setItem('city',city);
        localStorage.setItem('state',state);
        localStorage.setItem('phone',phone);
        localStorage.setItem('email',email);
        
    });


    

    return (
        <div>
            <div className="contact1">
                <h1>Contact Information</h1>
                <p>This page collects the way employers can reach you.</p>
                <form onSubmit={addContact}>
                    <label htmlFor="">First Name</label>
                    <input value={firstName} name='firstname' onChange={getFirstName} type="text" required/>
                    <label htmlFor="">Last Name</label>
                    <input value={lastName} name='lastname' onChange={getLastName} type="text" required/>
                    <label htmlFor="">Profession</label>
                    <input value={prof} name='profession' onChange={getProf} type="text" required/>
                    <label htmlFor="">City</label>
                    <input value={city} name='city' onChange={getCity} type="text" required/>
                    <label htmlFor="">LinkedIn</label>
                    <input value={state} name='state' onChange={getState} type="text" required/>
                    <label htmlFor="">Phone</label>
                    <input value={phone} name='phone' onChange={getPhone} type="number" required/>
                    <label htmlFor="">Email</label>
                    <input value={email} name='email' onChange={getEmail} type="text" required/>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} className="butdi">
                        <button className='savebut' onClick={submit}>Save</button> 
                        <img className={click ? 'check active' : 'check'} src={check} alt=""/>
                    </div>
                    
                </form>
                
                <Link to='/work'><button  disabled={next} className='nextbut'>Next : Work History</button></Link>
            </div>
            
        </div>
    )
}

export default Contact
