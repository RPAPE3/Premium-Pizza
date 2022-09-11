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
    quantity: Int
    # category: Category
  }

  type Pizza {
    _id: ID
    name: String
    toppings: [Topping]
    # category: Category
  }

  type Query {
    me: User
    user(email: String!): User
    categories: [Category]
    toppings(category: ID): [Topping]
    topping(_id: ID!): Topping
    pizzas(category: ID): [Pizza]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateTopping(_id: ID!, quantity: Int!): Topping
  }
`;

module.exports = typeDefs;