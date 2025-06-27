export type TCustomerParam = {
  name: string;
  spreadsheet: string;
  budget?: number;
}

export type TPostParam = {
  customerId: string;
  page: number;
  limit: number;
}

export type TCustomer = {
  referenceId: string;
  name: string;
  spreadsheet: string;
  createdAt: string;
}