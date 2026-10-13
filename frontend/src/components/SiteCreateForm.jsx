// Este componente tiene los inputs que son necesarios para
// poder crear un sitio.

function SiteCreateForm({ handleSubmit, siteCreateInfo, setSiteCreateInfo }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="siteurl">URL del sitio:</label><br/>
                <input type="text" id="siteurl" name="siteurl" value={siteCreateInfo.url} onChange={
                    (event) => setSiteCreateInfo({...siteCreateInfo, url: event.target.value})
                    } required/><br/>

                <label htmlFor="sitename">Nombre del sitio:</label><br/>
                <input type="text" id="sitename" name="sitename" value={siteCreateInfo.name} onChange={
                    (event) => setSiteCreateInfo({...siteCreateInfo, name: event.target.value})
                    } required/><br/>

                <label htmlFor="depthlevel">Nivel de profundidad (Máximo 5):</label><br/>
                <input type="number" id="depthlevel" name="depthlevel" value={siteCreateInfo.depthlevel} min="1" max="5" onChange={
                    (event) => setSiteCreateInfo({...siteCreateInfo, depthlevel: event.target.value})
                    } required/><br/>

                <label htmlFor="captfreq">Frecuencia de captura (Minutos):</label><br/>
                <input type="number" id="captfreq" name="captfreq" value={siteCreateInfo.captfreq} min="1" onChange={
                    (event) => setSiteCreateInfo({...siteCreateInfo, captfreq: event.target.value})
                    } required/><br/>

                <label htmlFor="docextr">Document extractor (Script):</label><br/>
                <textarea id="docextr" name="docextr" rows="5" cols="50" value={siteCreateInfo.docextr} onChange={
                    (event) => setSiteCreateInfo({...siteCreateInfo, docextr: event.target.value})
                    } pattern="/^function\s+(\w+)\s*\(.*\)\s*\{?$/gm" required/><br/>

                <label htmlFor="pageres">Page resolver (Script) (Opcional):</label><br/>
                <textarea id="pageres" name="pageres" rows="5" cols="50" value={siteCreateInfo.pageres} onChange={
                    (event) => setSiteCreateInfo({...siteCreateInfo, pageres: event.target.value})
                    } pattern="/^function\s+(\w+)\s*\(.*\)\s*\{?$/gm"/><br/>

                <button type="submit">Guardar cambios</button>
            </form>
        </>
    )
}

export default SiteCreateForm;