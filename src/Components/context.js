import React,{createContext,useState} from 'react' 


export const Data = createContext();

function Context(props) {

    const [contact, setContact] = useState({
        firstname:'',
        lastname:'',
        profession:'',
        city:'',
        state:'',
        phone:'',
        email:''
    });

    const [work, setWork] = useState([
        // title: '',
        // employer:'',
        // city:'',
        // state:'',
        // startdate:'',
        // enddate:'',
        // stillhere:''

    ]);

    const [education,setEducation] = useState([
        // school:'',
        // location:'',
        // degree:'',
        // field:'',
        // start:'',
        // end:''
    ]);

    const [briefSummary,setBriefSummary] = useState({
        summary:''
    })


// /Actually skills context
    const [job, setJob] = useState([
       
    ]);

   
    return (
        <Data.Provider value={{contactapi:[contact, setContact], workapi:[work, setWork], educationapi:[education,setEducation], skillsapi:[job,setJob], summaryapi:[briefSummary,setBriefSummary]  }} >
            {props.children}
        </Data.Provider>
    )
}

export default Context
