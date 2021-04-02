import React, { useState } from 'react';
import { Button ,FormControl,Form} from 'react-bootstrap/'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';


const AdminLoginForm = ({checkLoginCred}) =>{
    const [emailText,setemailText] = useState('admin@test');
    const [passwordText,setpasswordText] = useState('admin');
    const onLoginFormSubmit = (e) =>{
      e.preventDefault();
  
      console.log(emailText,passwordText);
      checkLoginCred(emailText,passwordText);
    }
  
    return(
      <div className="admin-login-form">
        <Form onSubmit={onLoginFormSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={emailText} onChange={(e)=>{setemailText(e.target.value)}}/>
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={passwordText} onChange={(e)=>{setpasswordText(e.target.value)}}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
  
    );
  
  }

export default AdminLoginForm;