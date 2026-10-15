import { testAPI } from './api.js'

export const getSitesByUser = async (userId) => {
    try {
        const response = await testAPI.get(`/users/${userId}/sites`);
        return response.data; 
        
    } catch (error) {
        console.error('Error al obtener los sitios del usuario:', error);
        throw error;
    }
}

export const checkIfEmailIsBeingUsed = async (anEmail) => {
    try {
        const response = await testAPI.get(`/users/emails/${anEmail}`);
        return response.data;

    } catch (error) {
        console.error('Error al comprobar si el correo se encuentra registrado:', error);
        throw error;
    }
}

export const createUser = async (userName, userEmail) => {
    try {
        const response = await testAPI.post(`/users/`, {
            name: userName,
            email: userEmail
        });
        return response.data; 
        
    } catch (error) {
        console.error('Error al intentar crear un usuario:', error);
        throw error;
    }
}