import './chatbox.css'

import Stories from '../../components/stories/Stories'

import CurrentUserData from '../../FakeApis/CurrentUserData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default function Chatbox() {
  return (
    <>
      <Stories/>
      <div className="chat-box">
        <div className="chat-box-top">
        <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
        <div className="user-name">
          <h3>{CurrentUserData.map(user=>(user.name))}</h3>
          <h5>{CurrentUserData.map(user=>(user.username))}</h5>
        </div>

        </div>
        <div className="chat-box-bottom">
          <form action="#">
            <input type="text" placeholder='Write something..'/>
            <button type='submit' className='btn btn-primary'>
              <FontAwesomeIcon icon={faArrowCircleRight}/>
            </button>
            <label  className='btn btn-primary' htmlFor='CFile'>
              <FontAwesomeIcon icon={faFileAlt}/>
              <input type="file" id='CFile' />
            </label>
          </form>
        </div>
      </div>
    </>
  )
}
