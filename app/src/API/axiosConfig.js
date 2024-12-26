import axios from 'axios';
import {DEV_URL} from '@env';
const applicationJsonHeader = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};
const multipartFormData = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
};
export const axiosApiJson = () => {
  const apiUrl = DEV_URL;
  return axios.create({
    baseURL: apiUrl,
    timeout: 60000,
    headers: applicationJsonHeader,
  });
};

export const axiosApiFormData = () => {
  return axios.create({
    baseURL: DEV_URL,
    timeout: 60000,
    headers: multipartFormData,
  });
};
