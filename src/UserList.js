import axios from "axios";
import React,{useState,useEffect} from "react";
import Table from 'react-bootstrap/Table'
const baseURL = "https://jsonplaceholder.typicode.com/users"

const UserList=()=>{
  const [listOfUSer, setlistOfUSer] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setlistOfUSer(response.data);
    });
  }, []);

  if (!listOfUSer) return null;
console.log(listOfUSer)
  return (

  listOfUSer.map(ele=> <div>
   
    <Table striped bordered hover >
        <thead>
            <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Phone Number</th>
            <th>Website</th>
            <th>Company Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{ele.name}</td>
            <td>{ele.username}</td>
            <td>{ele.email}</td>
            <td>{ele.address.street}</td>
            <td>{ele.phone}</td>
            <td>{ele.website}</td>
            <td>{ele.company.name}</td>
            </tr>
         </tbody>
    </Table>
 
    </div>
)
      

  );
}
export default UserList;