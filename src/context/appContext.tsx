import { createContext } from "react";
import { TCustomer } from "../types/customers";
import { TPost } from "../types/posts";
import { TCampaignReport } from "../types/campaigns";


export const AppContext = createContext({
  customers: [] as TCustomer[],
  posts: [] as TPost[],
  campaigns: [] as TCampaignReport[],
  fetchCustomers: () => {},
  fetchPosts: () => {},
  fetchCampaigns: () => {},
  createCustomer: () => {},
});