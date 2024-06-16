import './rightbar.css'

import Message from '../message/Message'
import FriendReq from '../FriendReq/FriendReq'

export default function Rightbar() {
  return (
    <div className='rightBar'>
       <div className="rightbar-container">
        <Message/>
        <FriendReq />
       </div>
    </div>
  )
}
