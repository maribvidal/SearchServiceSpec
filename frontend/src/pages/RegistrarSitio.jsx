import CrearSitio from '../components/CrearSitio.jsx'

function RegistrarSitio({ userId }) {

    return (
        <section>
            <h2>Registrar un sitio</h2>
            <CrearSitio userId={userId}/>
        </section>
    )
}

export default RegistrarSitio;