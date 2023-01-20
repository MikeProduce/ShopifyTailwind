import axios from 'axios';




export const API = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            return response.data;
        } catch (error) {
           console.log(error)
           return error;
        }

}