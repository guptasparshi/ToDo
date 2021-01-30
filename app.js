require('dotenv').config()
const morgan = require('morgan')
//import morgan from "morgan"
const app = require('express')()
const {
    v4: uuid
} = require('uuid')
const admin = require('./data/admin.data')
const data = require('./data/users.data')
const tasks = require('./data/tasks.data')
const env = require('./config/development')
//const port = 3000

app.use(morgan('tiny'))

app.use('/users', require('./routers/users.routers'))
app.use('/tasks', require('./routers/tasks.routers'))
app.use('/admin', require('./routers/admin.routers'))

const populate = () => {

    admin.findOrCreate('sparshi@todo.com', 'sparshi')
    admin.findOrCreate('sparshi@todo.com', 'sparshi')
    admin.findOrCreate('sparshi@todo.com', 'sparshi')

    data.add()
    data.add()
    data.add()

    tasks.add()
    tasks.add()
    tasks.add()

}
populate()

// let a= 'sparshi'
// let token1= jwt.sign(a, 'key')
// console.log(token1)
// //let decoded1 = jwt.verify(token1, 'key');
// //console.log(decoded1)
// let token2= jwt.sign(a, 'key')
// console.log(token2)

// let token = jwt.sign({
//     id : '5',
//     iat : new Date().getTime()
// }, 'key')
// console.log(token)
// let decoded = jwt.verify(token, 'key');
// console.log(decoded)

//console.log(uuid())

app.listen(env.port, () => {
    console.log("Server is up and running")
})