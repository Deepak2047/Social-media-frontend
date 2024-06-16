import './feeds.css'

import { Link } from 'react-router-dom'

// import CommetData from '../../FakeApis/CommetData'
// import CurrentUserData from '../../FakeApis/CurrentUserData'


import Comments from '../comments/Comments'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

export default function Feed({fed}) {

    let [openCommet, setOpenComment]=useState(false);
    const CommentHandler=()=>{
        setOpenComment(!openCommet)
    }
  return (
    <div className='feed' key={fed.id}>
        <div className="top-content">
            <Link to='/profile/id'>
                <div className='user'>
                    <img src={fed.feedProfile} alt="" />
                    <div>
                    <h5>{fed.name}</h5>
                    <small>1 Minutes Ago</small>
                    </div>
                </div>
            </Link>
            <span><FontAwesomeIcon icon={faListDots}/></span>
            </div>      
            <div className="mid-content">
                <p>{fed.desc}</p>
                <img src={fed.feedImage} alt="" />
            </div>
            <div className="bottom-content">
                <div className="action-item">
                    <span><FontAwesomeIcon icon={faHeart}/>30 Likes</span>
                </div>
                <div className="action-item" onClick={CommentHandler}>
                    <span><FontAwesomeIcon icon={faComment}/>2 Comments</span>
                </div>
                <div className="action-item">
                    <span><FontAwesomeIcon icon={faShare}/>2 Shares</span>
                </div>
            </div>
            {openCommet && <Comments/> }
    </div>
  )
}
