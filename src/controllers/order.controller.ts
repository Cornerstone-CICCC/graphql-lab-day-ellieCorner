import { Order } from "../models/order.model";

export const getOrders = async () => {
  try {
    return await Order.find().populate("productId").populate("customerId");
  } catch (error) {
    throw new Error(`Error fetching orders: ${error}`);
  }
};

export const createOrder = async (productId: string, customerId: string) => {
  try {
    const order = new Order({ productId, customerId });
    return await order.save();
  } catch (error) {
    throw new Error(`Error creating order: ${error}`);
  }
};

export const updateOrder = async (
  id: string,
  data: { productId?: string; customerId?: string }
) => {
  try {
    return await Order.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error(`Error updating order: ${error}`);
  }
};

export const deleteOrder = async (id: string) => {
  try {
    await Order.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw new Error(`Error deleting order: ${error}`);
  }
};
