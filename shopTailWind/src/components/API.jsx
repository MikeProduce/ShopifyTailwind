import axios from 'axios';

export const API = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products?limit=100');
            // console.log(response.data.products)
            return response.data.products;
            
        } catch (error) {
           console.log(error)
           return error;
        }
//This component fetches from the API and is a reusbale and can be imported in any other component/ page
}