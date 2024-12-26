import axios from 'axios'
import { DataManager } from '../../Utils/dataManager';
import { apiConstants } from '../../constants/appConstants';

export const ApiKit = axios.create({
  baseURL: apiConstants.baseURL,
  timeout: 100000,
})

ApiKit.interceptors.request.use(async config => {
  let accessToken = await DataManager.getAccessToken()
  config.headers["Content-Type"] = "application/json";
  
  if (accessToken) {
    config.headers["Content-Type"] = "application/json";
      config.headers["Authorization"] =  accessToken;
    config.headers['x-access-token'] = `Bearer ${accessToken}`
  }
  return config
})
