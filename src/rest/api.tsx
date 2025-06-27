import axios from 'axios';
import { TCustomerParam, TPostParam } from '../types/customers';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});


const getCustomers = async () => {
  const response = await axiosInstance.get('/customer');
  return response.data;
};

const createCustomer = async (customer: TCustomerParam) => {
  const response = await axiosInstance.post('/customer', customer);
  return response.data;
};

const getPosts = async (params: TPostParam) => {
  const response = await axiosInstance.post('/customer/get-posts', params);
  return response.data;
};

const getCampaigns = async (params: TPostParam) => {
  const response = await axiosInstance.post('/customer/get-campaigns', params);
  return response.data;
};

export const api = {
  getCustomers,
  createCustomer,
  getPosts,
  getCampaigns,
};