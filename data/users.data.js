const bcrypt = require('bcrypt')
const data = require('../config/development')
const arrays = require('./data')
const webTokens = require('../services/auth')

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const newObj = () => {
    const hash = bcrypt.hashSync(data.info.password[randomNumber(0, 19)], 0)
    let obj = {
        id: arrays.users.length * 3,
        age: randomNumber(18, 35),
        name: data.info.name[randomNumber(0, 19)],
        password: hash,
        emailId: data.info.emailId[randomNumber(0, 19)]
    }
    let token = webTokens.encode(obj.id)
    arrays.tokens.push(token)
    obj.token = token
    return obj
}

const add = () => {
    let obj = newObj()
    let user = Object.assign({}, obj)
    delete obj.token
    arrays.users.push(obj)
    return user
}

const findUser = (id) => {
    for (let i = 0; i < arrays.users.length; ++i) {
        if (id === arrays.users[i].id) {
            return arrays.users[i]
        }
    }
    return {}
}

const list = () => {
    return (arrays.users)
}

const update = (user) => {
    let arrIndex = arrays.users.indexOf(user)
    let updatedData = newObj()
    delete updatedData.token
    let x = {
        ...updatedData,
        id: arrays.users[arrIndex].id
    }
    arrays.users[arrIndex] = x
    let updatedArray = {
        index: arrIndex,
        "updated array": x
    }
    return updatedArray
}

const describe = (user) => {
    let userTasks = []
    for (let task of arrays.tasks) {
        if (task.userId === user.id) {
            userTasks.push(task)
        }
    }
    let userData = {
        ...user,
        userTasks
    } // keep it as it is
    return userData
}

const deleted = (user, token) => {
    let userIndex = arrays.users.indexOf(user)
    let tokenIndex = arrays.tokens.indexOf(token)

    arrays.users.splice(userIndex, 1)
    arrays.tokens.splice(tokenIndex, 1)

}

const len = () => {
    return (arrays.users.length)
}


module.exports = {
    add,
    newObj,
    randomNumber,
    findUser,
    list,
    update,
    describe,
    deleted,
    len
}