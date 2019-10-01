import React, {useState} from 'react'

const Form=()=>{
    const [UserName, setUserName] = useState('');
  
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(UserName);
    
  }
    return(
        <form onSubmit={submitHandler}>
        <h1>GITHUB CARD</h1><br />
        <input type='text' placeholder='enter github username' onChange={(e)=>setUserName(e.target.value)} required /><br />
        <button type='submit'>Search</button>
        </form>
    );
}
export default Form