import {HttpService} from './httpServices';
import {GET_CART_PRODUCT_LIST_ENDPOINT} from '../config/apiEndpoints.js';

export async function getCartProductData(){
  try {
    const endpoint = GET_CART_PRODUCT_LIST_ENDPOINT;
    const response = await HttpService.get(endpoint);
    return response;
  } catch(err) {
    return {err};
  }
}
