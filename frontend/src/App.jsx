import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Encabezado de la página */}
      <header>
        <h1>Search Service Spec</h1>
      </header>

      {/* Barra de navegación */}
      <nav>
        {/* Primera sección: Mis sitios | Registrar sitio | Mi cuenta */}
        <div class="firstsection">
          <button id="missitios"> Mis Sitios </button>
          <button id="registrarsitio"> Registrar Sitio </button>
          <button id="micuenta"> Mi cuenta </button>
        </div>
        {/* Segunda sección: Cerrar sesión */}
        <div class="secondsection">
          <button id="cerrarsesion"> Cerrar sesión </button>
        </div>
      </nav>

      {/* Cuerpo principal */}
      <main>
        {/* Sección donde va a estar el formulario que le permite al usuario instanciar un sitio */}
        <section>
          <form>
              <label for="sitename">Nombre del sitio:</label><br/>
              <input type="text" id="sitename" name="sitename" /><br/>
              <label for="depthlevel">Nivel de profundidad (Máximo 5):</label><br/>
              <input type="number" id="depthlevel" name="depthlevel" value="1" min="1" max="5" /><br/>
              <label for="captfreq">Frecuencia de captura (Minutos):</label><br/>
              <input type="number" id="captfreq" name="captfreq" value="10" min="1" /><br/>
              <label for="docextr">Document extractor (Script):</label><br/>
              <textarea id="docextr" name="docextr" rows="5" cols="50" /><br/>
              <label for="pageres">Page resolver (Script) (Opcional):</label><br/>
              <textarea id="pageres" name="pageres" rows="5" cols="50" /><br/>
              <input type="submit" value="Submit"></input>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
