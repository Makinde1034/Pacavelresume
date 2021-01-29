import logo from './logo.svg';
import './App.css';
import  Context from './Components/context.js';
import {useState} from 'react'
import Nav from './Components/Nav.js'
import Contact from './Components/Contact.js'
import {Route,Switch} from 'react-router-dom'
import Work from './Components/Work'
import Cv from './Components/templates/Cv'
import Education from './Components/Education'
import Skills from './Components/skills';
import Summary from './Components/Summary'
import Example from './Components/test'
import Proceed from './Components/Proceed'

function App() {


  return (
    <Context>
      <div className="App">  
        <Switch>
          <Route path='/' exact component={Nav} />
          <Route path='/contact' component={Contact} />
          <Route path='/work' component={Work} />
          <Route path='/education' component={Education} />
          <Route path='/skills' component={Skills} />
          <Route path='/cv' component={Cv} />
          <Route path='/summary' component={Summary} />
          <Route path='/example' component={Example} />
          <Route path='/proceed' component={Proceed} />


        </Switch>
    
        
      </div>
    </Context>
    
  );
}

export default App;
