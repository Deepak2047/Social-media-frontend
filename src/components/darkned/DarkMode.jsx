import './darkMode.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function DarkMode() {
  const DarkHandele=()=>{
    document.querySelector('body').classList.toggle('darkned');
  }
  return (
    <div className='dark-Mode-icon'>
      <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandele}/>
    </div>
  )
}
