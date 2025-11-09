import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Task } from './features/tasks/Task';

function App() {
  return (
    <>
      <Task />
    </>
  )
}

export default App
