import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'

import RegistrarSitio from './pages/RegistrarSitio.jsx'
import MisSitios from './pages/MisSitios.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

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
        <Routes>
          {/* Por ahora, hacer que MisSitios sea la página inicial por defecto */}
          <Route path="/" element={<MisSitios userId={loggedUserId} />} />
          <Route path="/registrarsitio" element={<RegistrarSitio userId={loggedUserId} />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
