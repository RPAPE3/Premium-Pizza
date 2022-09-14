import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const DELETE_TOPPING = gql`
  mutation deleteTopping($id: ID!) {
    deleteTopping(_id: $id) {
      _id
    }
  }
`;

export const DELETE_PIZZA = gql`
  mutation deletePizza($id: ID!) {
    deletePizza(_id: $id) {
      _id
    }
  }
`;

export const CREATE_TOPPING = gql`
mutation addTopping($categoryName: String!, $name: String!, $quantity: String!) {
  addTopping(categoryName: $categoryName, name: $name, quantity: $quantity) {
    name
    quantity
    categoryName
  }
}
`;
export const CREATE_PIZZA = gql`
mutation addPizza($categoryName: String!, $pizzaName: String!, $id: ID!) {
  addPizza(categoryName: $categoryName, pizzaName: $pizzaName, _id: $id) {
    pizzaName
    categoryName
    toppings {
      _id
    }
  }
}
`;