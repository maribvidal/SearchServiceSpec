import SiteForm from '../components/SiteForm.jsx'

function RegistrarSitio({ userId }) {

    return (
        <section>
            <h2>Registrar un sitio</h2>
            <SiteForm userId={userId}/>
        </section>
    )
}

export default RegistrarSitio;