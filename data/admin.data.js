const bcrypt = require('bcrypt')
const arrays = require('./data')


const findOrCreate = (email, password) => {
   let found = false
    // aim: find in admin array an object that has email id===email. if available match password. if not, create one.
    for (let i of arrays.admin) {
        if (email === i.email) {
            found = true
            if (bcrypt.compareSync(password, i.password))
                return
            else
                console.log('password didn\'t match')
        } 
    }
    if (!found)
        arrays.admin.push({
            id: arrays.admin.length,
            email,
            password: bcrypt.hashSync(password, 0),
        })

    console.log(arrays.admin)

}


module.exports = {
    findOrCreate,
}
