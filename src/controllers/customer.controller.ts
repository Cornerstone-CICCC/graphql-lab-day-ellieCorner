import { Customer } from "../models/customer.model";

export const getCustomers = async () => {
  try {
    return await Customer.find();
  } catch (error) {
    throw new Error(`Error fetching customers: ${error}`);
  }
};

export const createCustomer = async (data: {
  firstName: string;
  lastName: string;
  email: string;
}) => {
  try {
    const customer = new Customer(data);
    return await customer.save();
  } catch (error) {
    throw new Error(`Error creating customer: ${error}`);
  }
};

export const getCustomerById = async (id: string) => {
  try {
    return await Customer.findById(id);
  } catch (error) {
    throw new Error(`Error fetching customer: ${error}`);
  }
};

export const updateCustomer = async (
  id: string,
  data: { firstName?: string; lastName?: string; email?: string }
) => {
  try {
    return await Customer.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error(`Error updating customer: ${error}`);
  }
};

export const deleteCustomer = async (id: string) => {
  try {
    await Customer.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw new Error(`Error deleting customer: ${error}`);
  }
};
