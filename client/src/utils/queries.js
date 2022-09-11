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
      name
    }
  }
  }
`;

// export const QUERY_ALL_TOPPINGS = gql`
//   query toppings {
//     toppings {
//       _id
//       name
//       quantity
//       category {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const QUERY_ALL_PIZZAS = gql`
//   query pizzas {
//     pizzas {
//       _id
//       name
//       toppings {
//         _id
//         name
//       }
//       category {
//         _id
//         name
//       }
//     }
//   }
// `;