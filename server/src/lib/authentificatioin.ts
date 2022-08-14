import jwt from "jsonwebtoken"

export const generateToken = (user : any) => {
    const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            "SECRET_KEY",
            {
                expiresIn: '1h' 
            }
        )
        return token
    }
