import jwt from "jsonwebtoken"

export class Token {
    constructor(user : any){
        return jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            "SECRET_KEY",
            {
                expiresIn: '1h' 
            }
        )
    }
}