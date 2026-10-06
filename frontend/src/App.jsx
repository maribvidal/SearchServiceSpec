import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Registrar un sitio.</h1>
          <p>
            Edita <code>src/App.jsx</code> y guardalo para probar el <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 2)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
