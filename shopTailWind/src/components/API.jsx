import axios from 'axios';




export const API = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            return response.data;
        } catch (error) {
           console.log(error)
           return error;
        }
//This component fetches from the API and is a reusbale and can be imported in any other component/ page
}