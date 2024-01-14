import axios from 'axios';
const BASE_URL = 'https://world.openfoodfacts.org/api/v0';

export const getProducts = () => {
    return axios.get (`${BASE_URL}/product/?fields=product_name,code`)
    .then(response => {
        // Check if the products property exists in the response data
        if (response.data && response.data.products) {
          return response.data.products.slice(0, 2);
        } else {
          throw new Error('Products not found in response');
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        throw error; // Rethrow the error to be caught in the component
      });
  };