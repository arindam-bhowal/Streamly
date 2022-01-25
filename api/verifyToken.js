const jwt = require('jsonwebtoken')

const verify = (req, res, next) => {
    const authHeader = req.headers.token
    if(authHeader){
        const tokken = authHeader.split(" ")[1]

        jwt.verify(tokken, process.env.JWT_TOKKEN, (error, user) => {
            if (error) res.status(403).json('Token is not valid!')
            else{
                req.user = user
                next()
            }
        })
    }
    else{
        return res.status(401).json('Failed to authenticate User !!')
    }
}

module.exports = verify