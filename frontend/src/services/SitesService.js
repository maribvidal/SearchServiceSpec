import { testAPI } from './api.js'

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

export const getSiteById = async (siteId) => {
    try {
        const response = await testAPI.get(`/sites/${siteId}`)
        return response.data;
    } catch (error) {
        console.error(error)
        throw error
    }
}