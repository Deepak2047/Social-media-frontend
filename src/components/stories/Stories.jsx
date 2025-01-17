import './stories.css'

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'

import StoriesData from '../../FakeApis/StoriesData'

import UserStories from './UserStories'

export default function Stories() {
  return (
    <div className='stories'>
      <UserStories/>     
     
      <Swiper style={{width:'80%'}} 
      slidesPerView={4}
      spaceBetween={6}>
     
     {
     StoriesData.map(story=>(
            <SwiperSlide>
        <div className="story" key={(story.id)}>
              <div className="user">
                <img src={story.storyProfile} alt="" />
              </div>
              <img src={story.story} alt="" />
              <h5>{story.name}</h5>
        </div>
        </SwiperSlide>
        ))
        }
      
      </Swiper>
    </div>
  )
}
