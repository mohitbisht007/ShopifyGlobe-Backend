import jwt from "jsonwebtoken"

export default function aunthenticateUSer(req, res, next){
    try {
        const token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, "mySecretKey", (err, user) => {
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