import { useState } from 'react'
import './App.css'

import SiteForm from './components/SiteForm.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const loggedUserId = "6ab2e66b2b670fb41f75c033"; // Por ahora voy a utilizar un userId provisorio

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
            <SiteForm userId={loggedUserId}/>
        </section>
      </main>
    </>
  )
}

export default App
