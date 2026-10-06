import { useState } from 'react'
import './App.css'

import SiteForm from './components/SiteForm.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Encabezado de la página */}
      <header>
        <h1>Search Service Spec</h1>
      </header>

      {/* Barra de navegación */}
      <Navbar/>

      {/* Cuerpo principal */}
      <main>
        {/* Sección donde va a estar el formulario que le permite al usuario instanciar un sitio */}
        <section>
            <SiteForm/>
        </section>
      </main>
    </>
  )
}

export default App
