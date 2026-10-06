function SiteForm() {
    return (
        <form>
            <label htmlFor="sitename">Nombre del sitio:</label><br/>
            <input type="text" id="sitename" name="sitename" /><br/>
            <label htmlFor="depthlevel">Nivel de profundidad (Máximo 5):</label><br/>
            <input type="number" id="depthlevel" name="depthlevel" min="1" max="5" /><br/>
            <label htmlFor="captfreq">Frecuencia de captura (Minutos):</label><br/>
            <input type="number" id="captfreq" name="captfreq" min="1" /><br/>
            <label htmlFor="docextr">Document extractor (Script):</label><br/>
            <textarea id="docextr" name="docextr" rows="5" cols="50" /><br/>
            <label htmlFor="pageres">Page resolver (Script) (Opcional):</label><br/>
            <textarea id="pageres" name="pageres" rows="5" cols="50" /><br/>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default SiteForm;