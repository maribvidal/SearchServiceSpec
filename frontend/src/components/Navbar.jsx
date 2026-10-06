import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            {/* Primera sección: Mis sitios | Registrar sitio | Mi cuenta */}
            <div className="firstsection">
                <Link to="/">
                    <button id="missitios"> Mis sitios </button>
                </Link>
                <Link to="/registrarsitio">
                    <button id="registrarsitio"> Registrar sitio </button>
                </Link>
                <button id="micuenta"> Mi cuenta </button>
            </div>
            {/* Segunda sección: Cerrar sesión */}
            <div className="secondsection">
                <button id="cerrarsesion"> Cerrar sesión </button>
            </div>
        </nav>
    )
}

export default Navbar;