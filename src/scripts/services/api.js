import API_ENDPOINT from '../global/api-endpoint';

const apiService = {
  listRestaurants: async () => {
    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
      const responseJson = response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return error;
    }
  },
};

export default apiService;
