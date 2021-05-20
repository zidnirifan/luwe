import API_ENDPOINT from '../global/api-endpoint';

class ApiService {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
    const responseJson = response.json();
    return responseJson;
  }
}

export default ApiService;
