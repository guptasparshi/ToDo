const tasks = require('../data/tasks.data')
const users = require('../data/users.data')
const arrays = require('../data/data')

// @@api http://localhost:3000/tasks/add
const add = (req, res) => {

    res.status(200).json(
        tasks.add()
    )
}

// @@api http://localhost:3000/tasks/list
const list = (req, res) => {
    res.status(200).json(
       arrays.tasks
    )  
}

// @@api http://localhost:3000/tasks/markComplete
const markComplete = (req, res) => {
    res.status(200).json(
        tasks.markComplete(users.randomNumber(0, arrays.tasks.length-1))
    )
}


// @@api http://localhost:3000/tasks/update
const update = (req, res) => {
        
        res.status(200).json(tasks.update())
}

// @@api http://localhost:3000/tasks/describe
const describe = (req, res) => {
    res.status(200).json(
        tasks.describe(users.randomNumber(0, arrays.tasks.length-1))
    )
}

// @@api http://localhost:3000/tasks/delete
const deleted = (req, res) => {
    let x = users.randomNumber(0, arrays.tasks.length-1)
    res.status(200).json({
        delete: arrays.tasks[x]
    })
    arrays.tasks.splice(x, 1)
}


// @@api http://localhost:3000/tasks/listOnlyRemaining
const listOnlyRemaining = (req, res) => {
    res.status(200).json(
        tasks.listOnlyRemaining()
    )
}


module.exports = {
    add: add,
    list: list,
    markComplete,
    update,
    describe,
    delete: deleted,
    listOnlyRemaining
}