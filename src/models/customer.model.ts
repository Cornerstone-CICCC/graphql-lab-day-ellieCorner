import { Schema, model, Document } from "mongoose";

interface ICustomer extends Document {
  firstName: string;
  lastName: string;
  email: string;
}

const customerSchema = new Schema<ICustomer>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Customer = model<ICustomer>("Customer", customerSchema);
