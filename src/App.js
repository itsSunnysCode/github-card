import React, {useState} from 'react';
import './App.css';

function App() {
  const [UserName, setUserName] = useState('');
  
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(UserName);
    
  }
  return (
    
      <form onSubmit={submitHandler}>
      <input type='text' placeholder='enter github username' onChange={(e)=>setUserName(e.target.value)}required />
      <button type='submit'>Search</button>
      </form>
    
  );
}

export default App;
