import LinkButton from "./LinkButton";
import LogoutButton from "./LogoutButton";

function Navbar() {
    return (
        <nav>
            {/* Primera sección: Mis sitios | Registrar sitio | Mi cuenta */}
            <div className="firstsection">
                <LinkButton location="/" buttonId="missitios" buttonText="Mis sitios" />
                <LinkButton location="/registrarsitio" buttonId="registrarsitio" buttonText="Registrar sitio" />
                <button id="micuenta"> Mi cuenta </button>
            </div>
            {/* Segunda sección: Cerrar sesión */}
            <div className="secondsection">
                <LogoutButton />
            </div>
        </nav>
    )
}

export default Navbar;