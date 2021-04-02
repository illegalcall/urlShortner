import React, { useState } from 'react';

import AdminLoginForm from './AdminLoginForm'
import AdminAfterLogin from './AdminAfterLogin'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

const AdminLogin = () =>{
//  send login creds to backend


// check if they match
    const checkLoginCred = (email,password) =>{
      if(email === 'admin@test'&&password === 'admin'){
        setLoginInfo(true);
        return true;
      }
        
      else 
        return false;
    } 
    const [loginInfo,setLoginInfo] = useState(false);
  
    return(
      <div className="admin-login">
        <div style={loginInfo?{display:'none'}:{display:'block'}}>
          <AdminLoginForm checkLoginCred={checkLoginCred}/>
        </div>
        <div style={loginInfo?{display:'block'}:{display:'none'}}>
          <AdminAfterLogin />
        </div>
      </div>
  
    );
  
  }

export default AdminLogin;