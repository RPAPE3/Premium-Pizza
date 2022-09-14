const { AuthenticationError } = require("apollo-server-express");
const { User, Topping, Pizza, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    user: async (parent, { email }) => {

      return User.findOne({ email });
    },
    categories: async () => {
      return await Category.find().populate('toppings').populate({
        path: 'pizzas',
        populate: 'toppings'
      });
    },
    // pizzas: async () => {
    //   return await Pizza.find().populate('toppings');
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    
    deleteTopping: async (parent, toppingId) => {
      return Topping.findOneAndDelete({ _id: toppingId })
    },

    deletePizza: async (parent, pizzaId) => {
      return Pizza.findOneAndDelete({ _id: pizzaId })
    },

    addTopping: async (parent, { categoryName, name, quantity }) => { 
       const topping = await Topping.create({
        categoryName,
        name,
        quantity
      });

      await Category.findOneAndUpdate(
        { name: categoryName },
        { $addToSet: { toppings: topping._id } }
      );

      return topping;

    },

    addPizza: async (parent, { categoryName, pizzaName, _id }) => { 
      const pizza = await Pizza.create({
       categoryName,
       pizzaName,
       toppings: _id
     });

    //  await Pizza.findOneAndUpdate(
    //   { pizzaName: pizza.pizzaName },
    //   { $addToSet:  {toppings: _id} }
    // );

     await Category.findOneAndUpdate(
       { name: categoryName },
       { $addToSet: { pizzas: pizza._id } }
     );

     return pizza;

   },

    // addToppings: async (parent, { categoryName, name, quantity }) => {
    //   return Category.findOneAndUpdate(
    //     { name: categoryName },
    //     {
    //       $addToSet: { toppings:  {name: name, quantity: quantity} },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },

    updateTopping: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Topping.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
  },

};

module.exports = resolvers;