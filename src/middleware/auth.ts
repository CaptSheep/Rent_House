import jwt from 'jsonwebtoken'

class Auth {

    signToken = (data)=>{
        return new Promise((resolve, reject)=>{
            const payload = {
                data
            }
            const secret = 'secret';
            const options = {
                expiresIn: "24h",
            };
            jwt.sign(payload,secret,options, (err,token)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(token)
                }
            })
        })
    }
    checkToken = (req,res,next) =>{
        let authorization = req.headers.authorization
        if(authorization){
            let accessToken = authorization.split(' ')[1]
            if(!accessToken){
                res.json({
                    mess: 'Invalid Token'
                })
            }else {
                jwt.verify(accessToken,'secret',(err,data)=>{
                    if(err){
                        res.json({
                            mess:" Invalid Token"
                        })
                    }else {
                        req.decode = data
                        next()
                    }
                })
            }
        }else {
            res.json({
                mess:"You're not login. Please login first"
            })
        }

    }
}
export default new Auth()