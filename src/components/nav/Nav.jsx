
import './nav.css'
import { Link } from 'react-router-dom'

//--------------Fake Api Data----
import CurrentUser from '../../FakeApis/CurrentUserData'

import DarkMode from '../darkned/DarkMode'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faBars , faBell , faEnvelope ,faHome , faSearch ,faUser} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <nav>
       {/* ---------navArea-Left-------- */}
      <div className="nav-container">
        <div className="nav-left">
         <Link to='/'>
         <h3 className='logo'>Voyager</h3>
         </Link>
         <Link to='/'>
          <FontAwesomeIcon icon={faHome} />
         </Link>
         <Link to='/profile/id'>
          <FontAwesomeIcon icon={faUser} />
         </Link>
         <div className="Nav-Searchbar">
         <FontAwesomeIcon icon={faSearch} />
         <input type="search" />
         </div>
        </div>

        {/* ---------navArea-Right-------- */}
        <div className="nav-right">
          <Link to='/chatbox/id'>
          <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to='/'>
          <FontAwesomeIcon icon={faBell} />
          </Link>
          <DarkMode />
          <Link to='/'>
          <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="user">
            <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
            <h4>Smith Rowe</h4>
          </div>
        </div>
      </div>
    </nav>
  )
}
