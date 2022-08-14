import { gql } from "apollo-server";
import { UserTypedef } from "./User.typedefs";

const QueryTypeDefs = gql`
    type Query {
        userCount: Int!
        allUsers: [User]
        findUser(name: String!): User
    }
`

const MutationTypeDefs = gql`
    type Mutation {
        addUser(registerInput: RegisterInput): Message
        login(email: String!, password: String!): Message
    }
`

export const typeDefs = [
    UserTypedef,
    QueryTypeDefs,
    MutationTypeDefs
]