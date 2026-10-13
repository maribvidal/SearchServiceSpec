// Este componente busca reunir los inputs en común que tienen los
// formularios de manipulación de un sitio.

function SiteUpdateForm({ handleSubmit, siteCommonInfo, setSiteCommonInfo }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="depthlevel">Nivel de profundidad (Máximo 5):</label><br/>
                <input type="number" id="depthlevel" name="depthlevel" value={siteCommonInfo.depthlevel} min="1" max="5" onChange={
                    (event) => setSiteCommonInfo({...siteCommonInfo, depthlevel: event.target.value})
                    } required/><br/>

                <label htmlFor="captfreq">Frecuencia de captura (Minutos):</label><br/>
                <input type="number" id="captfreq" name="captfreq" value={siteCommonInfo.captfreq} min="1" onChange={
                    (event) => setSiteCommonInfo({...siteCommonInfo, captfreq: event.target.value})
                    } required/><br/>

                <label htmlFor="docextr">Document extractor (Script):</label><br/>
                <textarea id="docextr" name="docextr" rows="5" cols="50" value={siteCommonInfo.docextr} onChange={
                    (event) => setSiteCommonInfo({...siteCommonInfo, docextr: event.target.value})
                    } pattern="/^function\s+(\w+)\s*\(.*\)\s*\{?$/gm" required/><br/>

                <label htmlFor="pageres">Page resolver (Script) (Opcional):</label><br/>
                <textarea id="pageres" name="pageres" rows="5" cols="50" value={siteCommonInfo.pageres} onChange={
                    (event) => setSiteCommonInfo({...siteCommonInfo, pageres: event.target.value})
                    } pattern="/^function\s+(\w+)\s*\(.*\)\s*\{?$/gm" /><br/>

                <button type="submit">Guardar cambios</button>
            </form>
        </>
    )
}

export default SiteUpdateForm;