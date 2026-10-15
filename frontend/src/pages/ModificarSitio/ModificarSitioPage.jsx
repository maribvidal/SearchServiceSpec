import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateSite, getSiteById } from '../../services/api'; 

import ModificarSitioForm from './ModificarSitioForm';

function ModificarSitioPage() {
    const { id } = useParams(); // Extraemos el id de la URL actual
    const navigate = useNavigate();

    const [siteUpdateInfo, setSiteUpdateInfo] = useState({
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
                
                setSiteUpdateInfo({
                    depthlevel: siteData.depthLevel,
                    captfreq: siteData.captureFrequency, 
                    docextr: siteData.documentExtractor, 
                    pageres: siteData.pageResolver
                });
            } catch (error) {
                console.error("Error al obtener el sitio", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSiteData();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Client-side validation
            const funcRegex = /^function\s+\w+\(\w*\)\s*{(\s*\w*)*}/;
            if (!funcRegex.test(siteUpdateInfo.docextr))
                throw SyntaxError("La función pasada en el campo documentExtractor no es válida.")
            if (siteUpdateInfo.pageres != '' && !funcRegex.test(siteUpdateInfo.pageres))
                throw SyntaxError("La función pasada en el campo pageResolver no es válida.")

            // Armamos el objeto solo con lo que se puede modificar según tu backend
            const datosActualizados = {
                depthLevel: siteUpdateInfo.depthlevel,
                captureFrequency: siteUpdateInfo.captfreq,
                documentExtractor: siteUpdateInfo.docextr,
                pageResolver: siteUpdateInfo.pageres
            };

            await updateSite(id, datosActualizados);
            navigate('/');
        } catch ({ name, message }) {
            alert(` > Hubo un error de tipo ${name} crear el sitio: \n${message}`);
        }
    }

    if (isLoading)
        return <h2>Cargando datos del sitio...</h2>;

    return (
        <div class="siteform">
            <h2>Modificar Sitio</h2>
            <ModificarSitioForm handleSubmit={handleSubmit} siteUpdateInfo={siteUpdateInfo} setSiteUpdateInfo={setSiteUpdateInfo} />
        </div>
    )
}

export default ModificarSitioPage;