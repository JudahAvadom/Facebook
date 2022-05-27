import Dotenv from "dotenv";
import { Token } from "../../lib/authentificatioin";
Dotenv.config();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

interface Request {
    root: any,
    args: any
}

const userResolvers = {
    Query: {
        userCount: () => {
            return 1
        }
    },
    Mutation: {
        login: async(root : any , {email, password} :any) => {
            let token;
            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                const user = {id:"ADMIN",email};
                token = new Token(user);
                return {
                    userLevel: "ADMIN",
                    login: true,
                    token
                }
            }
        },
        addUser: async(req: Request) => {
            
        }
    }
}

export default userResolvers