let express = require('express')
const employeecontroller = require("./controller/employeecontroller.js");
const likecontroller = require('./controller/likecintroller.js')
const router = express.Router()

router.post('/adduserdata',employeecontroller.upload,employeecontroller.employeedata);
router.get('/finddata',employeecontroller.findemployee);
router.post('/findemp',employeecontroller.longin);
router.get('/findempbyid/:id',employeecontroller.findEmpById);
router.post('/updatedata/:id',employeecontroller.modify);
router.post('/deletedata/:id',employeecontroller.deletedata);
router.post('/addlikedata',likecontroller.likedpersondata);
router.get('/findliked',likecontroller.viewlikedperson);
module.exports=router