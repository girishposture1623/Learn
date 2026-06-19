import React from 'react'
import Card from './compoents/Card'

const App = () => {
  return (
    <div>
      <Card user='Vipul' age={22} img='https://images.unsplash.com/photo-1747229521023-5f89d2749fa3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card user='Sidhuu' age={21} img='https://images.unsplash.com/photo-1603105402889-eee36ee6406b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
