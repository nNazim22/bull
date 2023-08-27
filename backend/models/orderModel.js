import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  orderItems: [
    {
      name: { type: String, required: true },
      qyt: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Produit",
      },
    },
  ],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    codepostal: { type: String, required: true },
    contry: { type: String, required: true },
  },
});

const order = mongoose.model("Order", orderSchema);

export default order;
