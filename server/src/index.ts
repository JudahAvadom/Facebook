import { Connection } from './database';
import { Server } from './server';


Connection().then(() => {
    Server.createApolloServer()
})