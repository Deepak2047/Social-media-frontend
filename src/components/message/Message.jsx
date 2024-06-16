import './message.css'
import { Link } from 'react-router-dom'

import MessageData from '../../FakeApis/MessageData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Message() {
  return (
    <div className='Messages'>
      <div className="message-top">
        <h4>Meassage</h4>
          <FontAwesomeIcon icon={faEdit}/>
      </div>
      <div className="message-search">
        <FontAwesomeIcon icon={faSearch}/>
        <input type="search" placeholder='Search Message' />
      </div>
      <div className="border-div">

      </div>
      {
        MessageData.map(messp=>(
            <Link to='/chatbox/id'>
                <div className="message" key={messp.id}>
                    <div className="user">
                        <img src={messp.img} alt="" />
                        <div className="green-active"></div>
                    </div>
                    <div className="message-body">
                        <h5>{messp.name}</h5>
                        <p>{messp.mText}</p>
                    </div>
                </div>

            </Link>
        ))
      }
    </div>
  )
}
