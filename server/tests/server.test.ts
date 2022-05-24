import { createApolloServer, server as TestServer } from '../src/server';
import { createTestClient } from "apollo-server-testing";
import { gql, ApolloServer } from 'apollo-server';


// this is the query we use for our test
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      msg
    }
  }
`

describe('Testing Apollo Server', () => {
    let server, url;
    beforeAll(async () => {
        ({ server, url } = await createApolloServer({ port: 0 }));
    });
    afterAll(async () => {
        await server?.close();
    });
    const { query, mutate } = createTestClient(TestServer);

    test("Login User", async() =>  {
        const {data : {login}} = await mutate({ mutation: LOGIN_USER, variables: { email: "1", password: "1234" } });
        console.log(login.msg);
        expect(login.msg).toBe('Login_User');
    })
});
