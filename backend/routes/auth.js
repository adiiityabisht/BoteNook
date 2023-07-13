const express=require('express');
const router = express.Router()

router.get('/', (req,res)=>{
    obj={
        id: 1,
        name: "aditya"
    }
    res.json(obj)
})

module.exports = router