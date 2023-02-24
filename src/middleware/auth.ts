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
}
export default new Auth()