import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment from './Components/Assignment'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <RecoilRoot>
      <Assignment />
    </RecoilRoot>
  )
}

export default App
