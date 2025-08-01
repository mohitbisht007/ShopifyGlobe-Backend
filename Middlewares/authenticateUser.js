import jwt from "jsonwebtoken"


// aunthenticate User Function that protects cart route without login
export default function aunthenticateUSer(req, res, next){
    try {
        const token = req.headers.authorization
        if(!token) {
             return res.status(400).json({message: "Token Not Provided! You Are Not Authorized"})
        }

        jwt.verify(token.split(" ")[1], "mySecretKey", (err, user) => {
            if(err){
                 return res.status(400).json({message: "Inavlid Token! You Are Not Authorized"})
            }
            req.user = user
            next()
        })
        
    } catch (error) {
        return res.status(400).json(error.message); 
    }
}