import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'

import MisSitios from './pages/MisSitios.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import RegistrarSitioPage from './pages/RegistrarSitioPage.jsx'
import ModificarSitioPage from './pages/ModificarSitioPage.jsx'

function App() {
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
          <Route path="/registrarsitio" element={<RegistrarSitioPage userId={loggedUserId} />} />
          <Route path="/modificar/:id" element={<ModificarSitioPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
