const users = require('../data/users.data')
const webTokens = require('../services/auth')

// @@api http://localhost:3000/users/
const homepage = (req, res) => {
   // console.log(req.userId)
    res.status(200).send(
        "Welcome to Homepage"
    )
}

// @@api http://localhost:3000/users/signup
const signup = (req, res) => {
    res.status(200).json(
        users.add()
    )
}

// @@api http://localhost:3000/users/login
const login = (req, res) => {
    let user = req.user
    let token = webTokens.encode(user.id)
    user.token = token
    res.status(200).json(user)
}

// @@api http://localhost:3000/users/list
const list = (req, res) => {
    res.status(200).json(users.list())
}

// @@api http://localhost:3000/users/update
const update = (req, res) => {
    let user = req.user

    res.status(200).json(users.update(user))
}

// @@api http://localhost:3000/users/describe
const describe = (req, res) => {
    let user = req.user

    res.status(200).json(users.describe(user))
}

// @@api http://localhost:3000/users/delete
const deleted = (req, res) => {
    let user = req.user
    let token = req.token

    res.status(200).json(user)
    
    users.deleted(user, token)
}


module.exports = {
    homepage: homepage,
    signup: signup,
    login,
    list,
    update,
    describe,
    delete: deleted,
}