import {Button } from 'react-bootstrap/'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

const ShortURL = ({shortURL}) =>{
    return(
      <div className="container">
        <div className="row">
          <div className="col-9 short-url ">{shortURL}</div>
          <div className="col-3">
            <CopyToClipboard text={shortURL}>
                <Button style={shortURL?{display:"block"}:{display:"none"}} variant="primary copy-button float-right">Copy to Clipboard</Button>
            </CopyToClipboard>
          </div>
        </div>   
      </div>
      );
  }

export default ShortURL;