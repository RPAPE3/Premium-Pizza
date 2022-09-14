import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      username
      email
    }
  }
`;

export const QUERY_ALL_CATEGORIES = gql`
  query categories {
    categories {
    _id
    name
    toppings {
      _id
      name
      quantity
    }
    pizzas {
      _id
      pizzaName
      toppings {
        _id
        name
      }
    }
  }
  }
`;

// export const QUERY_TOPPING = gql`
//   query topping($id: ID!) {
//     topping(_id: $id) {
//       _id
//       categoryName
//       name
//       quantity
//     }
//   }
// `;