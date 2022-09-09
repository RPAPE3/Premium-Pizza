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

// export const QUERY_EVENT = gql`
//   query event($eventId: ID!) {
//     event(eventID: $eventId) {
//       _id
//       eventAuthor
//       description
//       createdAt
//     }
//   }
// `;

// export const QUERY_GROUPS = gql`
//   query groups {
//     group {
//       title
//       members
//       events
//     }
//   }
// `;

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


// export const QUERY_USER_DATA = gql` 
//   query user($email: String!) {
//     user(email: $email) {
//       _id
//       firstName
//       lastName
//       username
//       email
//   }
//   }
// `;