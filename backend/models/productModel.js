import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    Images: [{ type: String, required: true }],
    desciption: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    tailles: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("Produit", productSchema);

export default product;
