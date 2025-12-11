import { Product } from "../models/product.model";

export const getProducts = async () => {
  try {
    return await Product.find();
  } catch (error) {
    throw new Error(`Error fetching products: ${error}`);
  }
};

export const createProduct = async (data: {
  productName: string;
  productPrice: number;
}) => {
  try {
    const product = new Product(data);
    return await product.save();
  } catch (error) {
    throw new Error(`Error creating product: ${error}`);
  }
};

export const getProductById = async (id: string) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    throw new Error(`Error fetching product: ${error}`);
  }
};

export const updateProduct = async (
  id: string,
  data: { productName?: string; productPrice?: number }
) => {
  try {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error(`Error updating product: ${error}`);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await Product.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw new Error(`Error deleting product: ${error}`);
  }
};
