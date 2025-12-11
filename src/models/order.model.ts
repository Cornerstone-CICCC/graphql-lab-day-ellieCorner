import { Schema, model, Document, Types } from "mongoose";

interface IOrder extends Document {
  productId: Types.ObjectId;
  customerId: Types.ObjectId;
}

const orderSchema = new Schema<IOrder>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model<IOrder>("Order", orderSchema);
