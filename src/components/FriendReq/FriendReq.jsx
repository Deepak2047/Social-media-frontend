import './firendReq.css'
import { Link }   from 'react-router-dom'

import FriendReqData from '../../FakeApis/FriendReqData'

export default function FriendReq() {
  return (
    <div className='Friend-Req'>
      <h4>Friend Request</h4>
      {
        FriendReqData.map(friend=>(
          <div className="request">
            <Link to='/profile/id'>
            <div className="info" key={friend.id}>
              <div className="user">
                <img src={friend.img} alt="" />
                <h5>{friend.name}</h5>
              </div>
              <div className="info-name">
                <p>{friend.info}</p>
              </div>
            </div>
            </Link>
            <div className="action">
              <button className='btn btn-primary'>Accept</button>
              <button className='btn btn-red'>Delete</button>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}
