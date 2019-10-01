import React from 'react'
const Card=(props)=>{
    
    return(
        <div>
        <a href={props.homeURL} rel="noopener noreferrer" target='_blank' title={props.name || props.userName}><img src ={props.avatar} alt='avatar display here'/></a>
        <ul>
        <li>
        <a title='name'><strong>{props.name}</strong></a>
        </li>
        <li>
        <a title='number of followers'><span>Followers:</span><strong>{props.followers}</strong></a>
        </li>
        <li>
        <a title='number of reposetories'><span>Repositories:</span><strong>{props.repos}</strong></a>
        </li>
        <li>
        <a title='number of following'><span>Following:</span><strong>{props.following}</strong></a>
        </li>
        </ul>
        </div>
    );
}
export default Card