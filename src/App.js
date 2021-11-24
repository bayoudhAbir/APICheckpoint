import './App.css';

import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <h1>List of Users</h1>
      <div style={{width:"50%", marginLeft:"400px",marginTop:"50px"}}>
      <UserList/>
      </div>
     
    </div>
  );
}

export default App;
