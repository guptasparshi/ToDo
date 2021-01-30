const data = require('../config/development')
const users = require('./users.data')
const arrays = require('./data')


const newObj = () => {
    const random = users.randomNumber(0, arrays.users.length - 1)
    let obj = {
        createAt: Date.now(), //
        id: arrays.tasks.length * 5,
        userId: arrays.users[random].id,
        toDo: data.aim.toDo[users.randomNumber(0, 19)],
        completed: false
    }
    return obj
}

const add = () => {
    const random = users.randomNumber(0, arrays.users.length - 1)
    //console.log(users.users.length)
    arrays.tasks.push(newObj())
    //console.log(tasks)
    return arrays.tasks[arrays.tasks.length - 1]
}

const markComplete = (index) => {
    // console.log(tasks[index])
    arrays.tasks[index].completed = true
    return (arrays.tasks[index])
}


const listOnlyRemaining = () => {
    let remaining = []
    for (let i = 0; i < arrays.tasks.length; ++i) {
        if (arrays.tasks[i].completed === false) {
            remaining.push(arrays.tasks[i])
        }
    }
    return remaining
}

const describe = (index) => {
    // console.log(tasks[value])
    let task = arrays.tasks[index]
    let user = users.findUser(task.userId)
    return {
        ...task,
        user
    }
}

const update = () => {
    let arrIndex = Math.floor(Math.random() * arrays.tasks.length)
    let updatedData = newObj()
    let x = {
        ...updatedData,
        id: arrays.tasks[arrIndex].id,
        userId: arrays.tasks[arrIndex].userId
    }
    arrays.tasks[arrIndex] = x
    let updatedArray = {
        index: arrIndex,
        "updated array": x
    }
    return updatedArray
}

module.exports = {
    add,
    markComplete,
    listOnlyRemaining,
    describe,
    newObj,
    update
}