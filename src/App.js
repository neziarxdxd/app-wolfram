import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';


function App() {
  const [name, setName] = useState(null);

 
  
  const fetchName = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
   
    setName(await response.json());
  }

  
  return (
    <div className="App">
      <h1>Test</h1>
      <input type="text" placeholder="Enter Album ID:" />
      <button onClick={fetchName}>Submit</button>
       <ol className="App-list">
    {name && name.map((data) =>{
      return <li key={data.id}>{data.title}</li>
    })}
    </ol>
    
      </div>
    
  );

}

export default App;
