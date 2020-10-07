const express = require('express');
const router = express.Router();
// const pgp = require('pg-promise')(/* options */)

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

router.get('/topics',(req, res, next)=>{
    try{
        client.query('SELECT * from topics;', (err, data) => {
        if (err) next(err);
        res.json(data.rows)
        // client.end();
        });
    }catch(err){
        next(err)
    }
})

router.get('/list', (req, res, next)=>{
    try{
        let {level, topic, type, page} = req.query
        level = level? level: 'SELECT DISTINCT LEVEL FROM QUIZ'
        topic = topic? topic: 'SELECT ID FROM TOPICS'
        type = type? type: 'SELECT ID FROM QUES_TYPE'
        page = page|'1'
        let limit = 10;
        let offset = Math.abs((parseInt(page)-1)*limit) || 0;
        COND = "where level in ("+level+") and topicid in ("+topic+")"
        SQL = "select q.id,q.questions,o.option,o.opt_index,o.correct from quiz as q \
        inner join options as o on q.id=o.ques_id "+COND+" LIMIT "+limit+" OFFSET "+offset;

        client.query(SQL, (err, data) => {
            if (err) next(err);
            res.json(
                data.rows.reduce((pv, cv)=>{
                    if (pv[cv.id]) {
                        pv[cv.id]['options'][cv.opt_index] = cv.option
                    }
                    else{
                        pv[cv.id] = {'question':cv.questions}
                        pv[cv.id]['options'] = {}
                        pv[cv.id]['options'][cv.opt_index] = cv.option
                    }
                    if (cv.correct){
                        pv[cv.id]['ca'] = cv.opt_index
                    }
                    return pv;
                }, {})
            )
            // client.end();
        });
    }catch(err){
        next(err)
    }
})

module.exports = router;