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
            return {
                msg: "Login_User"
            }
        },
        addUser: async(req: Request) => {
            
        }
    }
}

export default userResolvers