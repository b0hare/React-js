import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {

  return (
    <div>
      <Card user='Dev' age='20' img='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'/>
      <Card user='Harsh' age='21' img='https://static.vecteezy.com/system/resources/thumbnails/070/200/301/small/a-glass-ball-sitting-on-the-beach-at-sunset-photo.jpeg'/>
      <Card user='Jai' age='24' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLrq4s4xwmnVwnLBDcBPH7CZY4SSto1DoDA&s'/>
    </div>
  )
}

export default App
