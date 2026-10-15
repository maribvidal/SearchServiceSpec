import './App.css'

import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from './components/Navbar.jsx'
import MisSitios from './pages/MisSitios/MisSitios.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import RegistrarSitioPage from './pages/RegistrarSitio/RegistrarSitioPage.jsx'
import ModificarSitioPage from './pages/ModificarSitio/ModificarSitioPage.jsx'

function App() {
  const loggedUserId = "6ab2e66b2b670fb41f75c033"; // Por ahora voy a utilizar un userId provisorio

  // Para cuestiones relacionadas con la autenticación
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    loginWithRedirect: login, // Starts the login flow
    user, // User profile
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  if (isLoading) return "Cargando...";

  return (
    <>
      {/* Encabezado de la página */}
      <header>
        <h1>Search Service Spec</h1>
      </header>

      {/* Revisar si el usuario está autenticado o no */}
      { isAuthenticated ? (
        <>
          {/* Barra de navegación */}
          <Navbar/>

          {/* Cuerpo principal */}
          <main>
            <p>¡Bienvenido de nuevo {user.name}!</p>
            <Routes>
              {/* Por ahora, hacer que MisSitios sea la página inicial por defecto */}
              <Route path="/" element={<MisSitios userId={loggedUserId} />} />
              <Route path="/registrarsitio" element={<RegistrarSitioPage userId={loggedUserId} />} />
              <Route path="/modificar/:id" element={<ModificarSitioPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </>
      ) : (
        <>
          <button onClick={signup}>Signup</button>
          <button onClick={login}>Login</button>
        </>
      ) }
    </>
  )
}

export default App