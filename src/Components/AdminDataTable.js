import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import './button.css'


const AdminDataTable = ({urlShortnerData}) =>{

    const SwitchButton = () =>{
      const [btnState,setbtnState] = useState(true);
      
      
      // use useEffect and when btnstate changes, post to api and shut it off or turn in back on
      


      return(
        <div className = "switch-button">
          <div className="col-sm-5">
            <button type="button" className={`btn btn-toggle ${btnState ? "active" : ""}`} autoComplete="off" onClick={()=>{setbtnState(!btnState)}}>
              <div className="handle"></div>
            </button>
          </div>
        </div>
      );
    }
    return(
      <div className="admin-data-table">

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Long URL</th>
              <th>Short URL</th>
              <th>Switch</th>
              <th>Clicks</th>
            </tr>
          </thead>
          
          <tbody>
            {urlShortnerData.map((data)=>{
                return(
                    <tr key={data.id}>
                        <td>{data.longURL}</td>
                        <td>{data.shortURL}</td>
                        <td><SwitchButton/></td>
                        <td>{data.click}</td>
                    </tr>
                );
            })}
          </tbody>
        </Table>
      </div>
    );
  }

export default AdminDataTable;
