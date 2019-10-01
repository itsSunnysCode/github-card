import React from 'react'
const Card=(props)=>{
    
    return(
        <div className="content">
        <img  src ={props.avatar} alt='avatar display here' />
        <a href={props.homeURL} rel="noopener noreferrer" target='_blank' title='click here to redirect to github profile'><h2 href={props.homeURL} target='_blank' ><strong>{props.name}</strong></h2></a>
        <h3 title='number of followers'><span>Followers:</span><strong><h2>{props.followers}</h2></strong></h3>
        <h3 title='number of reposetories'><span>Repositories:</span><strong><h2>{props.repos}</h2></strong></h3>
        <h3 title='number of following'><span>Following:</span><strong><h2>{props.following}</h2></strong></h3>
        
        
        </div>
    );
}
export default Card