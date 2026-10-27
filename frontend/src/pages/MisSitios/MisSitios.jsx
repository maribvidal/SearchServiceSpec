import { useState, useEffect } from 'react';
import { getSitesByUser } from '../../services/UsersService.js';
import { updateSite, deleteSite } from '../../services/SitesService.js'; 

import SiteCard from '../../components/SiteCard';
import Modal from '../../components/Modal.jsx';
import ModificarSitioForm from './ModificarSitioForm.jsx';
import Popup from '../../components/Popup.jsx';

function MisSitios({ userId }) {
  const [sites, setSites] = useState([]); // Con esto mantengo la información de los sitios en la página
  const [isLoading, setIsLoading] = useState(true);
  const [editingSite, setEditingSite] = useState(null);
  const [deletingSite, setDeletingSite] = useState(null);
  const [siteUpdateInfo, setSiteUpdateInfo] = useState({
      depthlevel: '',
      captfreq: '',
      docextr: '',
      pageres: ''
  });
  const [msjError, setMsjError] = useState('');

  useEffect(() => {
    const fetchSites = async () => {
      if (userId) {
        try {
              const data = await getSitesByUser(userId);
              setSites(data); // Guardamos el arreglo que nos mandó Nest.js
        } catch (error) {
              console.error("No se pudieron cargar los sitios", error);
        } finally {
              setIsLoading(false); 
        }
      }
    };

    fetchSites();
  // El useEffect solo se vuelve a ejecutar si esta variable camba
  }, [userId, sites]);

  const handleStartEdit = (site) => {
    setEditingSite({
      id: site._id,
      name: site.name
    });
    setSiteUpdateInfo({
      depthlevel: site.depthLevel || '',
      captfreq: site.captureFrequency || '',
      docextr: site.documentExtractor || '',
      pageres: site.pageResolver || ''
    });
  };

  // Al enviar los cambios desde el Modal
  const handleUpdateSubmit = async (event) => {
    event.preventDefault();

    try {
      // Client-side validation
      const funcRegex = /^function\s+\w+\(\w*\)\s*{(\s*\w*)*}/;
      if (!funcRegex.test(siteUpdateInfo.docextr))
        throw SyntaxError("La función pasada en el campo documentExtractor no es válida.")
      if (siteUpdateInfo.pageres != '' && !funcRegex.test(siteUpdateInfo.pageres))
        throw SyntaxError("La función pasada en el campo pageResolver no es válida.")

      const datosActualizados = {
        depthLevel: parseInt(siteUpdateInfo.depthlevel, 10),
        captureFrequency: parseInt(siteUpdateInfo.captfreq, 10),
        documentExtractor: siteUpdateInfo.docextr,
        pageResolver: siteUpdateInfo.pageres
      };

      await updateSite(editingSite.id, datosActualizados);

      // Actualizamos la lista local en memoria para reflejar cambios al instante
      setSites(sites.map(site => 
        site._id === editingSite.id ? { ...site, ...datosActualizados } : site
      ));

      // Cerramos el modal limpiando el estado
      setEditingSite(null);
    } catch (error) {
      setMsjError(error.message);
    }
  };

  const handleDeletingSite = (site) => {
    setDeletingSite({
      id: site._id,
      name: site.name
    })
  };

  const finishDeletingSite = async (siteId) => {
    try {
      // 1. Borramos en NestJS primero
      await deleteSite(siteId);

      // 2. Si salió bien, actualizamos la lista local y cerramos el modal
      setSites(sites.filter(site => site._id !== siteId));
      setDeletingSite(null);
    } catch (error) {
      // 3. Si falló, mostramos el popup de error
      setMsjError("No se pudo eliminar el sitio en el servidor.");
    }
  };

  if (isLoading) return <h2>Cargando tus sitios...</h2>;

  if (sites.length == 0) return <h2>Todavía no tienes sitios registrados...</h2>;

  return (
    <div>
      <h2>Mis Sitios Configurados</h2>

      <div className="sites-list">
        {sites.map((site) => (
          <SiteCard 
            key={site._id} 
            site={site} 
            onDeleted={handleDeletingSite}
            onEdit={handleStartEdit}
          />
        ))}
      </div>

      {/* Modal para editar un sitio */}
      <Modal isOpen={!!editingSite} onClose={() => setEditingSite(null)}>
        <h3>Modificar: {editingSite?.name}</h3>
        
        <ModificarSitioForm 
          handleSubmit={handleUpdateSubmit} 
          siteUpdateInfo={siteUpdateInfo} 
          setSiteUpdateInfo={setSiteUpdateInfo} 
        />
      </Modal>

      {/* Modal para borrar un sitio */}
      <Modal isOpen={!!deletingSite?.id} onClose={() => setDeletingSite(null)}>
        <h3>¿Estás seguro de borrar el sitio {deletingSite?.name}?</h3>
        
        <div>
          <button onClick={() => finishDeletingSite(deletingSite.id)}>Si</button>
          <button onClick={() => setDeletingSite(null)}>No</button>
        </div>
      </Modal>

      <Popup message={msjError} isVisible={msjError !== ''} onClose={() => setMsjError('')} />
    </div>
  );
}

export default MisSitios;