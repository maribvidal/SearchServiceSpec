import { deleteSite } from "../services/api";

function SiteCard(props) {
    const siteId = props.siteid

    const borrarSitio = async () => {
        try {
            await deleteSite(siteId);
            props.onDeleted(siteId);
        } catch (error) {
            console.error("No se pudieron cargar los sitios", error);
        }
    }

    return (
        // La propiedad 'key' es obligatoria. Usamos el _id que genera MongoDB
        <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <div id="siteinfo">
                <h3>{props.sitename}</h3> 
                <p><strong>URL:</strong> {props.siteurl}</p>
            </div>
            <div id="sitebuttos">
                <button id="deletesite" onClick={borrarSitio}>Borrar sitio</button>
                <button id="modifysite">Modificar sitio</button>
            </div>
        </div>
    )
}

export default SiteCard;