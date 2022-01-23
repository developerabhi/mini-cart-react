import Axios from 'axios';
import config from '../config/config';

export const HttpService = Axios.create({
  baseURL: config.apiGateway.apiUrl,
  timeout: config.axiosTimeout,
  headers: {'Content-Type': 'applocation/json'}
});
