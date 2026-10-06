import axios from "axios";

// eslint-disable-next-line no-unused-vars
const BACKEND_URL = 'http://localhost:3000';

const testAPI = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: { 
    'Content-Type': 'application/json' 
    },
});

// Métodos CRUD para Sites
export const createSite = async (siteData, userId) => {
    try {
        // Intentar hacer la petición al endpoint
        const response = await testAPI.post('/sites/', {
            name: siteData.name,
            url: siteData.url,
            depthLevel: siteData.depthlevel,
            captureFrequency: siteData.captfreq,
            documentExtractor: siteData.docextr,
            pageResolver: siteData.pageres,
            userId: userId
        })
        return response.data;
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const updateSite = async (siteId, siteData) => {
    try {
        const response = await testAPI.patch(`sites/${siteId}`, siteData)
        return response.data;
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const deleteSite = async (siteId) => {
    try {
        const response = await testAPI.delete(`/sites/${siteId}`)
        return response.data;
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const getSitesByUser = async (userId) => {
    try {
        const response = await testAPI.get(`/users/${userId}/sites`);
        return response.data; 
        
    } catch (error) {
        console.error('Error al obtener los sitios del usuario:', error);
        throw error;
    }
}