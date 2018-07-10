let router = require('express').Router();

router.post('/ddd',(req,res)=>{
    console.log(req.body);
    res.send('ddd');
})

module.exports = router;
