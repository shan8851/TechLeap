import { useState } from 'react'
import techLeapLogo from './assets/techleaplong.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src={techLeapLogo} className="logo" alt="Tech Leap logo" />
        </a>
      </div>
      <div className="content">
        <p className="text">Practical guidance for breaking into software development and thriving in your early years.</p>
        <iframe
          className="iframe"
          src="https://embeds.beehiiv.com/0c7500a7-6ab9-480b-8736-873ee23fd5e9?slim=true"
          data-test-id="beehiiv-embed"
          />
      </div>
    </div>
  )
}

export default App
