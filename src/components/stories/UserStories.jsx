import './stories.css'

import CurrentUser from '../../FakeApis/CurrentUserData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faAdd} from '@fortawesome/free-solid-svg-icons'

export default function UserStories() {
  return (
    <div className='story userStory'>
        <div className="user">
                <img src={CurrentUser.map(user=>(user.ProfieImage)) } alt="" />
              </div>
              <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
              <label htmlFor="storyFiles">
                <FontAwesomeIcon icon={faAdd}/>
                <input type="file" id="storyFiles" />
              </label>
              <h5>Add Story</h5>
    </div>
  )
}
