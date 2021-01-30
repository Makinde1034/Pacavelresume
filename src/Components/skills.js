import React,{useState,useContext} from 'react'
import {Data} from './context'
import trash  from './images/trash.png'
import {Link} from 'react-router-dom'
import './styles.css'

function Skills() {

    
   const [skill, setSkill] = useState('');

   const getSkill = (e) =>{
       setSkill(e.target.value);
    }
 
    // skills context
    const {skillsapi} = useContext(Data);
    const [job,setJob] = skillsapi




   const submitJob = e =>{
       e.preventDefault();
       if(skill !== ''){
       setJob([...job,{name:skill,id: 1 + Math.random()}]);
       setSkill('');
       }
    }


    // i dont even know how explain this

    // const [click, setClick] = useState(true);


    // Deleting Item from List
     
   function deleteItem(id){
       const newList = job.filter(item => item.id !== id)
       setJob(newList)
   }




    return (
        <div>
            <div className="skills">
                <h3>Skills</h3>
                <p>A nice resume should have skills that are related to your field.</p>
                <form onSubmit={submitJob} >
                    <div style={{display:'flex'}} className="wrap">
                        <input placeholder='E.g Photoshop' value={skill} onChange={getSkill} type="text"/>
                        <button className='addskill'>+</button>
                    </div>
                   
                   {job.map(item=>(
                       <div key={item.id} style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'30px'}}>
                          <li className='skill-list'>{item.name} </li> 
                           <img onClick={()=>deleteItem(item.id)} style={{height:'20px',marginLeft:'20px',cursor:'pointer'}} src={trash} alt=""/>
                       </div>
                       
                   ))}
                </form>
                <div className="butdiv">
                    <Link to='/education'><button className='backbut'>Back</button></Link>
                    <Link to='/summary'><button   className='nextbut'>Next : Summary</button></Link>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Skills
