// Este componente busca reunir los inputs en común que tienen los
// formularios de manipulación de un sitio.

function ModificarSitioForm({ handleSubmit, siteUpdateInfo, setSiteUpdateInfo }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="depthlevel">Nivel de profundidad (Máximo 5):</label><br/>
                <input type="number" id="depthlevel" name="depthlevel" value={siteUpdateInfo.depthlevel} min="1" max="5" onChange={
                    (event) => setSiteUpdateInfo({...siteUpdateInfo, depthlevel: event.target.value})
                    } required/><br/>

                <label htmlFor="captfreq">Frecuencia de captura (Minutos):</label><br/>
                <input type="number" id="captfreq" name="captfreq" value={siteUpdateInfo.captfreq} min="1" onChange={
                    (event) => setSiteUpdateInfo({...siteUpdateInfo, captfreq: event.target.value})
                    } required/><br/>

                <label htmlFor="docextr">Document extractor (Script):</label><br/>
                <textarea id="docextr" name="docextr" rows="5" cols="50" value={siteUpdateInfo.docextr} onChange={
                    (event) => setSiteUpdateInfo({...siteUpdateInfo, docextr: event.target.value})
                    } required/><br/>

                <label htmlFor="pageres">Page resolver (Script) (Opcional):</label><br/>
                <textarea id="pageres" name="pageres" rows="5" cols="50" value={siteUpdateInfo.pageres} onChange={
                    (event) => setSiteUpdateInfo({...siteUpdateInfo, pageres: event.target.value})
                    } /><br/>

                <button type="submit">Guardar cambios</button>
            </form>
        </>
    )
}

export default ModificarSitioForm;