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

// export const CREATE_EVENT = gql`
//   mutation addEvent(
//     $title: String!
//     $description: String!
//     $address: String!
//     $date: String!
//   ) {
//     addEvent(
//       title: $title
//       description: $description
//       address: $address
//       date: $date
//     ) {
//       _id
//       title
//       date
//       eventAuthor
//       description
//       address
//       createdAt
//     }
//   }
// `;

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