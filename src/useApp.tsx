import { useEffect, useState } from "react";
import { api } from "./rest/api";
import { TCustomer, TCustomerParam } from "./types/customers";
import { TPost } from "./types/posts";
import { TCampaignReport } from "./types/campaigns";

export const useApp = () => {
  const [customers, setCustomers] = useState<TCustomer[]>([]);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [campaigns, setCampaigns] = useState<TCampaignReport[]>([]);

  const fetchCustomers = async () => {
    try {
      const response = await api.getCustomers();
      setCustomers(response);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPosts = async () => {
    try {
      if (!customers.length) return;

      const response = await api.getPosts({ customerId: customers[0].referenceId, page: 1, limit: 10 });
      setPosts(response.items);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCampaigns = async () => {
    try {
      if (!customers.length) return;

      const response = await api.getCampaigns({ customerId: customers[0].referenceId, page: 1, limit: 10 });
      setCampaigns(response.items);
    } catch (error) {
      console.error(error);
    }
  }

  const createCustomer = async (customer: TCustomerParam) => {
    try {
      const response = await api.createCustomer(customer);
      setCustomers([response, ...customers]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (customers.length) {
      fetchPosts();
      fetchCampaigns();
    }
  }, [customers]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  return { customers, posts, campaigns, fetchCustomers, fetchPosts, fetchCampaigns, createCustomer };
};