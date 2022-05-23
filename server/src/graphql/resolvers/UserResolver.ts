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
        addUser: async(req: Request) => {

        }
    }
}

export default userResolvers