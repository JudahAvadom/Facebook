import { ApolloServer } from 'apollo-server';
import resolvers from "./graphql/resolvers/";
import Dotenv from "dotenv";
import typeDefs from './graphql/typeDefs';
Dotenv.config()

const PORT = process.env.PORT || 8000;

export const server : any = new ApolloServer({
    typeDefs,
    resolvers,
});

export const createApolloServer : any = async (options = { port: PORT }) => {
    const serverInfo = await server.listen(options);
    if (process.env.NODE_ENV !== 'test') {
        console.log(
            `Query endpoint ready at http://localhost:${options.port}${server.graphqlPath}`,
        );
    }

    // serverInfo is an object containing the server instance and the url the server is listening on
    return serverInfo;
};