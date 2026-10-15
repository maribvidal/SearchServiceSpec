import RegistrarSitioComponent from './RegistrarSitioComponent.jsx';

function RegistrarSitioPage({ userId }) {

    return (
        <section>
            <h2>Registrar un sitio</h2>
            <RegistrarSitioComponent userId={userId}/>
        </section>
    )
}

export default RegistrarSitioPage;