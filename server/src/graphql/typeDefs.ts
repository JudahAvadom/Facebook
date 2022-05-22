const { gql } = require('apollo-server');

module.exports = gql`

    interface Human {
        firstName: String!
        lastName: String!
    }

    type Message {
        msg: String!
    }

    type User implements Human {
        id: ID!

        # Basic info
        firstName: String!
        lastName: String!
        role: String!
        password: String!
        email: String!
        sex: String!

        # Birth Date
        day: Int!
        month: Int!
        year: Int!
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
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        birth: [Date]!
        sex: [Sex]!
    }

    type Query {
        userCount: Int!
    }

    type Mutation {
        addUser(registerInput: RegisterInput): Message
    }
`;
