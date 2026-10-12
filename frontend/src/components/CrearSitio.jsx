import { useState } from 'react';
import { createSite } from '../services/api';
import { useNavigate } from 'react-router-dom';

import SiteCreateForm from './SiteUpdateForm';

function CrearSitio({ userId }) {
    // Declarar un estado por cada input solicitado
    const [siteCreateInfo, setSiteCreateInfo] = useState({
        url: '',
        name: '',
        depthlevel: '',
        captfreq: '',
        docextr: '',
        pageres: ''
    });

    const navigate = useNavigate();

    // Esta función va a anular el submit del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Juntar todos los datos que se van a enviar en un solo objeto
        const siteData = {
            name: siteCreateInfo.name,
            url: siteCreateInfo.url,
            depthlevel: siteCreateInfo.depthlevel,
            captfreq: siteCreateInfo.captfreq,
            docextr: siteCreateInfo.docextr,
            pageres: siteCreateInfo.pageres
        }
        console.log("Datos listos para enviar a Nest.js:", siteData);

        try {
            const data = await createSite(siteData, userId)
            console.log(' > Se pudo crear la página con éxito: ', data)
            navigate('/');
        } catch (error) {
            console.error(' > Hubo un error al crear el sitio: ', error)
        }
    }

    return (
        <div class="siteform">
            <SiteCreateForm handleSubmit={handleSubmit} siteCreateInfo={siteCreateInfo} setSiteCreateInfo={setSiteCreateInfo} />
        </div>
    )
}

export default CrearSitio;