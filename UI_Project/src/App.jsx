import React from 'react'
import Section1 from './component/Section1/Section1'

const user=[
  {
    img:'https://plus.unsplash.com/premium_photo-1661585613424-84bbf3227b08?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    color:'blue',
    tag:'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1664474415934-b67f0495a979?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'lightgreen',
    intro:'',
    tag:'Underserved'
  },
  {
    img:'https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'red',
    intro:'',
    tag:'Unserbanked'
  },
   {
    img:'https://plus.unsplash.com/premium_photo-1664474415934-b67f0495a979?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'pink',
    intro:'',
    tag:'Underserved'
  },
]

const App = () => {
  return (
    <div>
    <Section1 user={user}/>
    </div>
  )
}

export default App
