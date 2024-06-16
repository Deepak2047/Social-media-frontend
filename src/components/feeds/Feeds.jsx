import './feeds.css'
import Feed from './Feed'
import HomeFeedData from '../../FakeApis/HomeFeedData'

export default function Feeds() {
  return (
    <div className='feeds'>
    {
      HomeFeedData.map(fed=>(
       <Feed fed={fed} key={fed.key}/>
      ))
    }
    </div>
  )
}
