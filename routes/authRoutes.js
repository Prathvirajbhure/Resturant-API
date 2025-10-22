const express = require('express')
const { registerContoller, loginController } = require('../controllers/authController')
const router = express.Router()

//register || post
router.post('/register', registerContoller)

//login || POST
router.post('/login', loginController)



module.exports = router