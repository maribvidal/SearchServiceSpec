import { useState } from 'react';
import { createSite } from '../../services/SitesService.js';
import { useNavigate } from 'react-router-dom';

import RegistrarSitioForm from './RegistrarSitioForm';

function RegistrarSitioComponent({ userId }) {
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

        try {
            // Client-side validation
            const funcRegex = /^function\s+\w+\(\w*\)\s*{(\s*\w*)*}/;
            if (!funcRegex.test(siteCreateInfo.docextr))
                throw SyntaxError("La función pasada en el campo documentExtractor no es válida.")
            if (siteCreateInfo.pageres != '' && !funcRegex.test(siteCreateInfo.pageres))
                throw SyntaxError("La función pasada en el campo pageResolver no es válida.")
            
            // Juntar todos los datos que se van a enviar en un solo objeto
            const siteData = {
                name: siteCreateInfo.name,
                url: siteCreateInfo.url,
                depthlevel: siteCreateInfo.depthlevel,
                captfreq: siteCreateInfo.captfreq,
                docextr: siteCreateInfo.docextr,
            }
            if (siteCreateInfo.pageres != '')
                siteData.pageres = siteCreateInfo.pageres

            console.log("Datos listos para enviar a Nest.js:", siteData);

            const data = await createSite(siteData, userId)
            console.log(' > Se pudo crear la página con éxito: ', data)
            navigate('/');
        } catch ({ name, message }) {
            alert(` > Hubo un error de tipo ${name} crear el sitio: \n${message}`)
        }
    }

    return (
        <div className="siteform">
            <RegistrarSitioForm handleSubmit={handleSubmit} siteCreateInfo={siteCreateInfo} setSiteCreateInfo={setSiteCreateInfo} />
        </div>
    )
}

export default RegistrarSitioComponent;