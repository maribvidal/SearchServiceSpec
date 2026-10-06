import axios from "axios";

const BACKEND_URL = 'http://localhost:3000';

// Métodos CRUD para Sites
export const createSite = async (siteData, userId) => {
    try {
        // Intentar hacer la petición al endpoint
        const response = await axios.post('${BACKEND_URL}/api/sites/', {
            name: siteData.name,
            url: siteData.url,
            depthLevel: siteData.depthlevel,
            captureFrequency: siteData.captfreq,
            documentExtractor: siteData.docextr,
            pageResolver: siteData.pageres,
            userId: userId
        })
        console.log(response)
    } catch(error) {
        console.error(error)
    } finally {
        console.log(" > createSite se terminó de ejecutar.")
    }
}