import React, {useState} from 'react'
import '../App.css'
import Card from './Card'
const Form=()=>{
    const [userName, setuserName] = useState('');
    const [showCard, setshowCard] = useState(false);
    const [name, setname] = useState('');
    const [avatar, setavatar] = useState('');
    const [repos, setrepos] = useState('');
    const [followers, setfollowers] = useState('');
    const [following, setfollowing] = useState('');
    const [homeURL, sethomeURL] = useState('');
    const [notFound, setnotFound] = useState('');
    const getProfile=(userName)=>{
        let finalURL = `https://api.github.com/users/${userName}`;

        fetch(finalURL)
        .then((res)=>res.json())
        .then((data) => {
           
            setuserName(data.login);
            setname(data.name);
            setavatar(data.avatar_url);
            setrepos(data.public_repos);
            setfollowers(data.followers);
            setfollowing(data.following);
            sethomeURL(data.html_url);
            setnotFound(data.message);            
        })
        .catch((error) => console.log('there was a problem in fetching data'))
    }
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(userName);
    getProfile(userName);
    setshowCard(true);
    setuserName('');
    
  }
  var page;
  if(showCard===false){
      page='';
  }
  else if (showCard===true){
      page=<Card
       userName={userName}
       name={name}
       avatar={avatar}
       repos={repos}
       followers={followers}
       following={following}
       homeURL={homeURL}
       notFound={notFound}
       />
  }
    return(
        <div className='mainDiv'>
        <div className="bg"></div>
        <form onSubmit={submitHandler}>
        <h1>Github Card</h1><br />
        <input type='text'  placeholder='Enter Github Username' onChange={(e)=>setuserName(e.target.value)} required ></input><br />
        <button type='submit'><strong>Search</strong></button>
        </form>
        {page}
        </div>
    );
}
export default Form