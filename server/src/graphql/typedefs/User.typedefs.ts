import { gql } from "apollo-server";

export const UserTypedef = gql`
  enum YesNo {
      YES
      NO
  }
  type Message {
    token: String!
    userLevel: String!
    login: Boolean!
  }
    type User {
        name: String!
        lastname: String!
        email: String!
      password: String!
      dayOfBirth: Int!
      monthOfBirth: Int!
      yearOfBith: Int!
      sex: String!
      id: ID!
      msg: String!
  }
  input Sex {
    sexId: Int!
    sexType: String!
  }
  input Date {
    day: Int!
    month: Int!
    year: Int!
  }
  input RegisterInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
    birth: [Date]!
    sex: [Sex]!
  }
`