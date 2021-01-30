const router = require('express').Router()
const {
    auth,
} = require('../middlewares/users.middleware')
const controller = require('../controllers/users.controllers')

router.get('/', controller.homepage)
router.get('/signup', controller.signup)
router.get('/login', auth, controller.login)
router.get('/list', controller.list)
router.get('/update', auth, controller.update)
router.get('/describe', auth, controller.describe)
router.get('/delete', auth, controller.delete)

module.exports = router