import axios from "axios";
import { GET, POST, PUT } from '../Actions/Type';

export const SET_API = async (path, method, payload) => {


    try {
        switch (method) {
            case POST:
                try {
                    const response = await axios.post(path, payload);
                    return response.data;
                } catch (error) {
                    console.log('POST request error', error);
                    throw error; 
                }
            case GET:
                try {
                    const response = await axios.get(path);
                    return response.data;
                } catch (error) {
                    
                    console.log('GET request error', error);
                    throw error; 
                }
            default:
                return; 
        }
    } catch (error) {

        console.log('Unexpected error', error);
        throw error; 
    }
};
