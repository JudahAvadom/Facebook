const { ApolloServer } = require('apollo-server');
const typeDefs = require("./graphql/typeDefs");
import resolvers from "./graphql/resolvers/";
import Dotenv from "dotenv";
Dotenv.config()
const PORT = process.env.PORT || 8000;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(PORT).then(({ url }: any) => {
    console.log(`Server ready at ${url}`);
});