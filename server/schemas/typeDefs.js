const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String!
    lastName: String
    username: String
    email: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Category {
    _id: ID
    name: String
    toppings: [Topping]
    pizzas: [Pizza]
  }

  type Topping {
    _id: ID
    name: String
    quantity: String
    categoryName: String,
  }

  type Pizza {
    _id: ID
    name: String
    toppings: [Topping]
  }

  type Query {
    me: User
    user(email: String!): User
    categories: [Category]
    toppings(category: ID): [Topping]
    topping(toppingId: ID!): Topping
    pizzas(category: ID): [Pizza]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteTopping(_id: ID!): Topping
    deletePizza(_id: ID!): Pizza
    addTopping(categoryName: String!, name: String!, quantity: String!): Topping
    addToppings(categoryName: String!, name: String!, quantity: String!): Category
    updateTopping(_id: ID!, quantity: String!): Topping
  }
`;

module.exports = typeDefs;