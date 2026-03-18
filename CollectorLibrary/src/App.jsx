import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { OtroButton } from './components/button/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Quiero cambiar de carrera😢</h1>
          <OtroButton Text="Click Me!"/>
          <br></br>
          <br></br>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <OtroButton Text="Vite Docs" IconRef="/icons.svg#vite-icon" SiteRef="https://vite.dev/guide/" />
            </li>
            <li>
              <OtroButton Text="React Docs" IconRef="/icons.svg#react-icon" SiteRef="https://react.dev/learn" />
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <OtroButton Text="GitHub" IconRef="/icons.svg#github-icon" SiteRef="https://github.com/rajuria/CollectorLibrary" />
            </li>
            <li>
              <OtroButton Text="Discord" IconRef="/icons.svg#discord-icon" SiteRef="https://chat.vite.dev/" />
            </li>
            <li>
              <OtroButton Text="Twitter" IconRef="/icons.svg#x-icon" SiteRef="https://twitter.com/vite_js" />
            </li>
            <li>
              <OtroButton Text="Bluesky" IconRef="/icons.svg#bluesky-icon" SiteRef="https://www.reddit.com/r/vitejs/" />
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
