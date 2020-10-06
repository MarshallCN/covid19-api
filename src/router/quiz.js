const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')

router.get('/topics',(req, res, next)=>{
    let db = pgp('postgres://jqbcfloatsioxw:9874b43481cf61ae5595b3d32b111173ba7aead2b56e25923a194b93de67b28d@ec2-3-248-4-172.eu-west-1.compute.amazonaws.com:5432/d57inj6fclkq56')
    db.any('SELECT * from topics')
    .then((data)=>{
        res.json({
            data
        })
    })
    .catch((err)=>{
        next(err)
    })
})

router.get('/list', (req, res, next)=>{
    try{
        let {type, level, uid} = req.query
        res.json({
            type,
            level,
            uid,
            quiz:{
                ques1:{
                    ask: "How far do you need to stand from someone in the UK?",
                    options: {
                        a: "1m", b: "1.5m", c:"2m", d:"3m", ca: "c" 
                    }
                },
                ques2:{
                    ask: "Do you need to keep social distance when you wear a face mask?",
                    options:{
                        a: "Yes", b: "No", ca:"a"
                    }
                }
            }
        })
    }catch(err){
        next(err)
    }
})

module.exports = router;