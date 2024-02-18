import mongoose from "mongoose";

const cartsCollection = "carts";
//const cart = await CartsModel.findById(cartId);

const cartsSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

const cartsModel = mongoose.model(cartsCollection, cartsSchema);

class Carts {
  constructor(cart = { products: [] }) {
    this.products = cart.products;
  }

  static async create(cart) {
    const newCart = new cartsModel(cart);
    return newCart.save();
  }

  static async getAll() {
    return cartsModel.find().populate("products.productId");
  }

  static async getById(id) {
    return cartsModel.findById(id).populate("products.productId");
  }

  static async update(id, updatedCart) {
    return cartsModel.findByIdAndUpdate(id, updatedCart, { new: true });
  }

  static async delete(id) {
    return cartsModel.findByIdAndDelete(id);
  }
}

export default Carts;