function SiteCard({ onDeleted, onEdit, site }) {
    return (
        <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <div id="siteinfo">
                <h3>{site.name || site.nombre}</h3> 
                <p><strong>URL:</strong> {site.url}</p>
            </div>
            <div id="sitebuttons">
                <button onClick={() => onDeleted(site)}>Borrar sitio</button>
                <button onClick={() => onEdit(site)}>Modificar sitio</button>
            </div>
        </div>
    );
}

export default SiteCard;