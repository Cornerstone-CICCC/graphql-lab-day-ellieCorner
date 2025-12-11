import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";
import {
  getCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customer.controller";
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controller";
import { Order } from "../models/order.model";

export const resolvers = {
  Query: {
    products: async () => {
      return await getProducts();
    },
    customers: async () => {
      return await getCustomers();
    },
    orders: async () => {
      return await getOrders();
    },
    getProductById: async (_: any, { id }: { id: string }) => {
      return await getProductById(id);
    },
    getCustomerById: async (_: any, { id }: { id: string }) => {
      return await getCustomerById(id);
    },
  },
  Product: {
    customers: async (parent: any) => {
      const orders = await Order.find({ productId: parent.id }).populate(
        "customerId"
      );
      return orders.map((order) => order.customerId);
    },
  },
  Customer: {
    products: async (parent: any) => {
      const orders = await Order.find({ customerId: parent.id }).populate(
        "productId"
      );
      return orders.map((order) => order.productId);
    },
  },
  Order: {
    product: async (parent: any) => {
      return await getProductById(parent.productId);
    },
    customer: async (parent: any) => {
      return await getCustomerById(parent.customerId);
    },
  },
  Mutation: {
    addProduct: async (
      _: any,
      {
        productName,
        productPrice,
      }: { productName: string; productPrice: number }
    ) => {
      return await createProduct({ productName, productPrice });
    },
    editProduct: async (
      _: any,
      {
        id,
        productName,
        productPrice,
      }: { id: string; productName?: string; productPrice?: number }
    ) => {
      return await updateProduct(id, { productName, productPrice });
    },
    removeProduct: async (_: any, { id }: { id: string }) => {
      return await deleteProduct(id);
    },

    addCustomer: async (
      _: any,
      {
        firstName,
        lastName,
        email,
      }: { firstName: string; lastName: string; email: string }
    ) => {
      return await createCustomer({ firstName, lastName, email });
    },
    editCustomer: async (
      _: any,
      {
        id,
        firstName,
        lastName,
        email,
      }: { id: string; firstName?: string; lastName?: string; email?: string }
    ) => {
      return await updateCustomer(id, { firstName, lastName, email });
    },
    removeCustomer: async (_: any, { id }: { id: string }) => {
      return await deleteCustomer(id);
    },

    addOrder: async (
      _: any,
      { productId, customerId }: { productId: string; customerId: string }
    ) => {
      return await createOrder(productId, customerId);
    },
    editOrder: async (
      _: any,
      {
        id,
        productId,
        customerId,
      }: { id: string; productId?: string; customerId?: string }
    ) => {
      return await updateOrder(id, { productId, customerId });
    },
    removeOrder: async (_: any, { id }: { id: string }) => {
      return await deleteOrder(id);
    },
  },
};
