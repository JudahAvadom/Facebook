import { ApolloServer } from 'apollo-server';
import resolvers from "./graphql/resolvers/";
import Dotenv from "dotenv";
import typeDefs from './graphql/typeDefs';
Dotenv.config()

const PORT = process.env.PORT || 8000;
export class Server {
    public static initialServer : any = new ApolloServer({ typeDefs, resolvers });
    public static createApolloServer = async (options = { port: PORT }) => {
        const serverInfo = await this.initialServer.listen(options);
        if (process.env.NODE_ENV !== 'test') {
            console.log(
                `Query endpoint ready at http://localhost:${options.port}${this.initialServer.graphqlPath}`,
            );
        }
        return serverInfo;
    }
}