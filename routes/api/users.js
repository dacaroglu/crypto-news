const express= require('express')
const router = express.Router()
const usersCTRL = require('../../controllers/users')

router.post('/signup',usersCTRL.create)
router.post('/login',usersCTRL.login)
router.post('/update',usersCTRL.update)
router.post('/favorite',usersCTRL.addFav)
router.post('/user',usersCTRL.user)
module.exports=router