import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex rounded-4xl  overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {props.user.users.map(function(elm, ind){
        return <RightCard key={ind} id={ind} color={elm.color} img={elm.img} tag={elm.tag}/>
      })}
      
    </div>
  )
}

export default RightContent
