import './App.css'

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from './components/Navbar.jsx'
import MisSitios from './pages/MisSitios/MisSitios.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import RegistrarSitioPage from './pages/RegistrarSitio/RegistrarSitioPage.jsx'
import ModificarSitioPage from './pages/ModificarSitio/ModificarSitioPage.jsx'
import { checkIfEmailIsBeingUsed, createUser } from './services/UsersService.js'

function App() {
  const [loggedUserId, setLoggedUserId] = useState('')

  // Para cuestiones relacionadas con la autenticación
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    loginWithRedirect: login, // Starts the login flow
    user, // User profile
  } = useAuth0();

  const signup = () => {
      login({ authorizationParams: { screen_hint: "signup" } });
    }

  {/* Prestarle atención a la variable isAuthenticated */}
  useEffect(() => {
      async function checkEmail() {
        // Revisar si existe el usuario
        if (user) {
          try {
            
            // Si el usuario se autenticó...
            if (isAuthenticated) {
              // Fijarse si es la primera vez que el usuario inicia sesión
              // en la página o no.
              const call = await checkIfEmailIsBeingUsed(user.email);
              let userId = call._id;

              if (!call) {
                const call2 = await createUser(user.name, user.email);
                userId = call2._id;
                console.log("Usuario creado con éxito.");
              }

              // Settear el id del usuario loggeado para ver quien crea cada sitio
              setLoggedUserId(userId)
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
      checkEmail()
  }, [isAuthenticated])

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
          <button onClick={signup}>Registrar cuenta</button>
          <button onClick={login}>Iniciar sesión</button>
        </>
      ) }
    </>
  )
}

export default App