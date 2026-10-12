import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateSite, getSiteById } from '../services/api'; 

import SiteCommonForm from './SiteCommonForm';

function ModificarSitio() {
    const { id } = useParams(); // Extraemos el id de la URL actual
    const navigate = useNavigate();

    const [siteCommonInfo, setSiteCommonInfo] = useState({
        depthlevel: '',
        captfreq: '',
        docextr: '',
        pageres: ''
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSiteData = async () => {
            try {
                // Obtener la información actual del sitio
                const siteData = await getSiteById(id);
                
                setSiteCommonInfo({...siteCommonInfo, depthlevel: siteData.depthLevel});
                setSiteCommonInfo({...siteCommonInfo, captfreq: siteData.captureFrequency});
                setSiteCommonInfo({...siteCommonInfo, docextr: siteData.documentExtractor});
                setSiteCommonInfo({...siteCommonInfo, pageres: siteData.pageResolver});
            } catch (error) {
                console.error("Error al obtener el sitio", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSiteData();
    }, [id, siteCommonInfo]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Armamos el objeto solo con lo que se puede modificar según tu backend
        const datosActualizados = {
            depthLevel: siteCommonInfo.depthlevel,
            captureFrequency: siteCommonInfo.captfreq,
            documentExtractor: siteCommonInfo.docextr,
            pageResolver: siteCommonInfo.pageres
        };

        try {
            await updateSite(id, datosActualizados);
            navigate('/');
        } catch (error) {
            console.error('Error al modificar', error);
        }
    }

    if (isLoading)
        return <h2>Cargando datos del sitio...</h2>;

    return (
        <div>
            <h2>Modificar Sitio</h2>
            <SiteCommonForm handleSubmit={handleSubmit} siteCommonInfo={siteCommonInfo} setSiteCommonInfo={setSiteCommonInfo} />
        </div>
    )
}

export default ModificarSitio;