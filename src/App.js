import React, { useState } from 'react';
// import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Route , Link , Switch} from 'react-router-dom'
//import {Navbar,Nav, NavDropdown, Button ,FormControl,Form} from 'react-bootstrap/'
// import Table from 'react-bootstrap/Table'
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';

//Components
import NavbarComp from './Components/NavbarComp'
import HeroText from './Components/HeroText'
import Typebox from './Components/Typebox'
import ShortURL from './Components/ShortURL'
import ContactUs from './Components/ContactUs'
// import AdminLoginForm from './Components/AdminLoginForm'
// import AdminDataTable from './Components/AdminDataTable'
// import AdminAfterLogin from './Components/AdminAfterLogin'
import AdminLogin from './Components/AdminLogin'


//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './Components/button.css'




function App() {

  const getShortURL = (longURL) => {
    
    // send longurl to backend and store incoming result in ans
    axios.post('http://localhost:5000/api/',{
      url: longURL
    })
      .then(res => {
        console.log(res);
        //console.log(res.data);
      }, (error) => {
        console.log(error);
      });
    
    const ans = "www.shorturl.com/" + Math.floor(Math.random()*100) ;
    setShortURL(ans); 
  }

  const [shortURL,setShortURL] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <NavbarComp/>
          <Switch>
            <Route exact path='/'>
              <HeroText/>
              <Typebox getShortURL={getShortURL}/>
              <ShortURL shortURL={shortURL} />
            </Route>
            <Route path='/contact-us'>
              <ContactUs />
            </Route>
            <Route path='/admin-login'>
              <AdminLogin />
            </Route>
          </Switch>
          
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
