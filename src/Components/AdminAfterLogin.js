import AdminDataTable from './AdminDataTable';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';


const AdminAfterLogin = () =>{

    //API call to get the table as array of objs
    const urlShortnerData = [
        {
            id:'123',
            shortURL:'a',
            longURL:'aaa',
            click:20
        },
        {
            id:'1234',
            shortURL:'b',
            longURL:'bbb',
            click:21
        },
        {
            id:'12346',
            shortURL:'c',
            longURL:'ccc',
            click:24
        }
    ]

    return(
      <div>
        <AdminDataTable urlShortnerData={urlShortnerData}/>
      </div>
    );
  }

export default AdminAfterLogin;