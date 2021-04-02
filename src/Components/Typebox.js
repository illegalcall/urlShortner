import React, { useState } from 'react';
import {Button ,FormControl, InputGroup} from 'react-bootstrap/'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

const Typebox = ({getShortURL}) => {
    const [text,setText] = useState("");
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      getShortURL(text);
      console.log(text);
  
    }
    return(
      <form className="typebox container" onSubmit={handleSubmit}>
          <InputGroup className="mt-5 mb-3 mx-auto " >
            <FormControl
              placeholder="Enter the url.."
              aria-label="Original url"
              aria-describedby="basic-addon2"
              value={text}
              onChange={(e)=>{setText(e.target.value);}}
            />
            <InputGroup.Append>
              <Button 
              variant="outline-secondary"
              onClick={handleSubmit}
              >
                Shorten
              </Button>
            </InputGroup.Append>
          </InputGroup>
      </form>
    );
  
  }

export default Typebox;