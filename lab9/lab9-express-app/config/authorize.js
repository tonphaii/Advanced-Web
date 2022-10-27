const jwt = require('jsonwebtoken')

const key ='MY_KEY'

const authorization = ((req,res,next)=> {
    const token = req.headers['authorization'];

    if(token === undefined){
        return res.status(401).json({
            "status":  401,
            "message": "unauthorized"
        })
    }else{
        jwt.verify(token,key,(err,decode) =>{
            if(err){
                return res.status(401).json({
                    "status":  401,
                    "message": "unauthorized"
                })
            }else{
                console.log(decode)
                next();
            }
        })
    }
})

module.exports =authorization