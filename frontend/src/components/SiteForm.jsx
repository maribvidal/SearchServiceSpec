import { useState } from 'react';
import { createSite } from '../services/api';
import { useNavigate } from 'react-router-dom';

function SiteForm(props) {
    // Declarar un estado por cada input solicitado
    const [siteurl, setSiteurl] = useState('');
    const [sitename, setSitename] = useState('');
    const [depthlevel, setDepthlevel] = useState('');
    const [captfreq, setCaptfreq] = useState('');
    const [docextr, setDocextr] = useState('');
    const [pageres, setPageres] = useState('');

    const navigate = useNavigate();
    
    const resetFields = () => {
        setSitename('');
        setDepthlevel('');
        setCaptfreq('');
        setDocextr('');
        setPageres('');
    }

    // Esta función va a anular el submit del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Juntar todos los datos que se van a enviar en un solo objeto
        const siteData = {
            name: sitename,
            url: siteurl,
            depthlevel: depthlevel,
            captfreq: captfreq,
            docextr: docextr,
            pageres: pageres
        }
        console.log("Datos listos para enviar a Nest.js:", siteData);

        try {
            const data = await createSite(siteData, props.userId)
            console.log(' > Se pudo crear la página con éxito: ', data)
            resetFields();
            navigate('/');
        } catch (error) {
            console.error(' > Hubo un error al crear el sitio: ', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="siteurl">URL del sitio:</label><br/>
            <input type="text" id="siteurl" name="siteurl" value={siteurl} onChange={(event) => setSiteurl(event.target.value)} /><br/>

            <label htmlFor="sitename">Nombre del sitio:</label><br/>
            <input type="text" id="sitename" name="sitename" value={sitename} onChange={(event) => setSitename(event.target.value)} /><br/>

            <label htmlFor="depthlevel">Nivel de profundidad (Máximo 5):</label><br/>
            <input type="number" id="depthlevel" name="depthlevel" value={depthlevel} min="1" max="5" onChange={(event) => setDepthlevel(event.target.value)} /><br/>

            <label htmlFor="captfreq">Frecuencia de captura (Minutos):</label><br/>
            <input type="number" id="captfreq" name="captfreq" value={captfreq} min="1" onChange={(event) => setCaptfreq(event.target.value)} /><br/>

            <label htmlFor="docextr">Document extractor (Script):</label><br/>
            <textarea id="docextr" name="docextr" rows="5" cols="50" value={docextr} onChange={(event) => setDocextr(event.target.value)} /><br/>

            <label htmlFor="pageres">Page resolver (Script) (Opcional):</label><br/>
            <textarea id="pageres" name="pageres" rows="5" cols="50" value={pageres} onChange={(event) => setPageres(event.target.value)} /><br/>

            <button type="submit">Crear sitio</button>
        </form>
    )
}

export default SiteForm;