import SiteForm from '../components/SiteForm.jsx'

function RegistrarSitio(props) {

    return (
        <section>
            <h2>Registrar un sitio</h2>
            <SiteForm userId={props.userId}/>
        </section>
    )
}

export default RegistrarSitio;