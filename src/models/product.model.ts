import { Schema, model, Document } from "mongoose";

interface IProduct extends Document {
  productName: string;
  productPrice: number;
}

const productSchema = new Schema<IProduct>(
  {
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct>("Product", productSchema);
