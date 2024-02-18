import mongoose from "mongoose";
import Carts from "./mongo/models/carts.model.js";
import Products from "./mongo/models/products.model.js";
import Users from "./mongo/models/users.model.js";
import Tickets from "./mongo/models/tickets.model.js";
import config from '../config/config.js';

const connectToDatabase = async () => {
  if (process.env.PERSISTENCE === "MONGO") {
    await mongoose.connect(process.env.MONGO_URL);
    const { default: CartsMongo } = await import('./mongo/carts.mongo.js');
    const { default: ProductsMongo } = await import('./mongo/products.mongo.js');
    const { default: UsersMongo } = await import('./mongo/users.mongo.js');
    const { default: TicketsMongo } = await import('./mongo/tickets.mongo.js');
    Carts = CartsMongo;
    Products = ProductsMongo;
    Users = UsersMongo;
    Tickets = TicketsMongo;
  } else if (process.env.PERSISTENCE === "MEMORY") {
    const { default: CartsMemory } = await import("./memory/carts.memory.js");
    const { default: ProductsMemory } = await import("./memory/products.memory.js");
    const { default: UsersMemory } = await import("./memory/users.memory.js");
    const { default: TicketsMemory } = await import("./memory/tickets.memory.js");
    Carts = CartsMemory;
    Products = ProductsMemory;
    Users = UsersMemory;
    Tickets = TicketsMemory;
  }
};

export { Carts, Products, Users, Tickets };
