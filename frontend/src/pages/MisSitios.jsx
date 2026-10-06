import { useState, useEffect } from 'react';
import { getSitesByUser } from '../services/api';
import SiteCard from '../components/SiteCard';

function MisSitios(props) {
  const [sites, setSites] = useState([]); // Con esto mantengo la información de los sitios en la página
  const [isLoading, setIsLoading] = useState(true);
  
  const handleSiteDeleted = (siteId) => {
    // Quedarse con todos los sitios cuyo ID sea distinto al que acabo de borrar
    const nuevaLista = sites.filter(site => site._id !== siteId);
    setSites(nuevaLista); 
  };

  useEffect(() => {
    const fetchSites = async () => {
      try {
            const data = await getSitesByUser(props.userId);
            setSites(data); // Guardamos el arreglo que nos mandó Nest.js
      } catch (error) {
            console.error("No se pudieron cargar los sitios", error);
      } finally {
            setIsLoading(false); 
      }
    };

    fetchSites();
  // El useEffect solo se vuelve a ejecutar si esta variable camba
  }, [props.userId]);

  if (isLoading) {
    return <h2>Cargando tus sitios...</h2>;
  }

  return (
    <div>
      <h2>Mis Sitios Configurados</h2>

      {/* Si no hay sitios... */}
      {sites.length === 0 ? (
        <p>Todavía no tenés sitios registrados.</p>
      ) : (
        <div className="sites-list">
          {sites.map((site) => (
            <div key={site._id}>
                <SiteCard siteid={site._id} sitename={site.name || site.nombre} siteurl={site.url} onDeleted={handleSiteDeleted} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MisSitios;