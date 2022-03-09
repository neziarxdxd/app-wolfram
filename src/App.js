
import './App.css';
import {useState} from 'react';


function App() {
  const [name, setName] = useState(null);
  
  const fetchName = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    setName(await response.json());
  }

  
  return (
    <div className="App">
      <h1>Test</h1>
      <input type="text" placeholder="Enter Album ID:" />
      <button onClick={fetchName}>Submit</button>
       <div  className="app-list">
    {name && name.map((data) =>{
      return <div className='card-user'>
        <div className='textHead'> {data.name} </div>
        <div className='subText'> {data.email}</div>
         </div>
    })}
    </div>
    
      </div>
    
  );

}

export default App;
