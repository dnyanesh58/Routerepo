const express = require('express');
const path = require('path');
const { dirname } = require('path');
const router = express.Router();

router.get('/',function(req,resp)
{
    resp.sendFile(path.join(__dirname,'../public/index.html'));
})

router.get('/about',function(req,resp) 
{
    resp.sendFile(path.join(__dirname,'../public/about.html'));    
})

router.get('/user',function(req,resp) 
{
    resp.sendFile(path.join(__dirname,'../public/user.html'));    
})

module.exports=router;