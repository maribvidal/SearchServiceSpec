import SiteForm from './components/SiteForm.jsx'

function RegistrarSitio(props) {

    return (
        <section>
            <SiteForm userId={props.userId}/>
        </section>
    )
}

export default RegistrarSitio;