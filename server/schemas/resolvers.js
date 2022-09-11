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
      return await Category.find().populate('toppings').populate('pizzas');
    },
    // toppings: async (parent, { category }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   return await Topping.find(params).populate('category');
    // },
    // pizzas: async (parent, { category }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   return await Pizza.find(params).populate('category').populate('toppings');
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

    updateTopping: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Topping.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
  },

};

module.exports = resolvers;