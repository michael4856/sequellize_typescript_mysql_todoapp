const express = require('express')
const controllers = require('../controllers/userController')
const rout = express.Router()

rout.get('/', controllers.home)
rout.post('/signup', controllers.signUp)
rout.post('/signin', controllers.signIn) 



module.exports = rout