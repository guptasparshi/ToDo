const jwt = require('jsonwebtoken')
const data = require('../config/development')

const encode = (id) =>{
   return jwt.sign({
    id: id,
    iat: new Date().getTime()
}, data.jwt.key)
}

const decode = (token) =>{
    return  jwt.verify(token, data.jwt.key)
}


module.exports = {
    decode,
    encode
}