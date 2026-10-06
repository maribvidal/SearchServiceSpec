import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateSite, getSiteById } from '../services/api'; 

function ModificarSitio() {
    const { id } = useParams(); // Extraemos el id de la URL actual
    const navigate = useNavigate();

    const [depthlevel, setDepthlevel] = useState('');
    const [captfreq, setCaptfreq] = useState('');
    const [docextr, setDocextr] = useState('');
    const [pageres, setPageres] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSiteData = async () => {
            try {
                // Obtener la información actual del sitio
                const siteData = await getSiteById(id);
                
                setDepthlevel(siteData.depthLevel);
                setCaptfreq(siteData.captureFrequency);
                setDocextr(siteData.documentExtractor);
                setPageres(siteData.pageResolver);
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
        
        // Armamos el objeto solo con lo que se puede modificar según tu backend
        const datosActualizados = {
            depthLevel: parseInt(depthlevel, 10),
            captureFrequency: parseInt(captfreq, 10),
            documentExtractor: docextr,
            pageResolver: pageres
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="depthlevel">Nivel de profundidad (Máximo 5):</label><br/>
                <input type="number" id="depthlevel" name="depthlevel" value={depthlevel} min="1" max="5" onChange={(event) => setDepthlevel(event.target.value)} /><br/>

                <label htmlFor="captfreq">Frecuencia de captura (Minutos):</label><br/>
                <input type="number" id="captfreq" name="captfreq" value={captfreq} min="1" onChange={(event) => setCaptfreq(event.target.value)} /><br/>

                <label htmlFor="docextr">Document extractor (Script):</label><br/>
                <textarea id="docextr" name="docextr" rows="5" cols="50" value={docextr} onChange={(event) => setDocextr(event.target.value)} /><br/>

                <label htmlFor="pageres">Page resolver (Script) (Opcional):</label><br/>
                <textarea id="pageres" name="pageres" rows="5" cols="50" value={pageres} onChange={(event) => setPageres(event.target.value)} /><br/>

                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    )
}

export default ModificarSitio;