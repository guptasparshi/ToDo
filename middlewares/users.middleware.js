const users = require("../data/users.data")
const arrays = require('../data/data')
const webTokens = require('../services/auth')

const auth = (req, res, next) => {
   const index = users.randomNumber(0, arrays.tokens.length-1)
   let token = arrays.tokens[index]
   req.token = token

   let decoded = webTokens.decode(token)
   let id = decoded.id
    
   let user= users.findUser(id)
   req.user = user
   return user.id ? next() : res.send('user not found')

}

// const middleware2 = (req, res, next) => {
//    // console.log("2")
//    next()
//    // console.log("2end")

// }

module.exports = {
   auth,
   // middleware2: middleware2
} 