const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String!
    lastName: String
    username: String
    email: String!
  }

#   type Event {
#     _id: ID
#     title: String
#     date: String
#     eventAuthor: String
#     description: String
#     address: String
#     createdAt: String
#   }

#   type Connection {
#     selfUsername: String!
#     otherUsername: String
#     closeFriend: Boolean
#   }

#   type Group {
#     title: String
#     members: [User]
#     events: [Event]
#   }

#   type Recap {
#     _id: ID
#     image: String
#     eventDescription: String
#   }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    user(email: String!): User
    users: [User]
    username: [User]
    # events: Event
    # events: [Event]
    # events(username: String): [Event]
    # event(eventId: ID!): Event
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # addEvent(title: String!, description: String!, address: String!, date: String!): [Event]
  }
`;

module.exports = typeDefs;