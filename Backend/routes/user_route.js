const express=require('express');
const { getuser } = require('../controller/usercontroller');

const router=express.Router();

router.route("/users").get(getuser);

module.exports=router;