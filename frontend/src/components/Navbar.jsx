function Navbar() {
    return (
        <nav>
            {/* Primera sección: Mis sitios | Registrar sitio | Mi cuenta */}
            <div className="firstsection">
            <button id="missitios"> Mis sitios </button>
            <button id="registrarsitio"> Registrar sitio </button>
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