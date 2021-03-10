const express =  require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000 //default Heroku's port

// allow all CORS
app.use(cors())
// Allow for specified origin
// var corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200 // For legacy browser support
// }
// app.use(cors(corsOptions));

// =================Global Middleware==================
// function valid_name_middleware(req, res, next){
//     let {token} = req.query;
//     if(typeof(token)=="undefined" || token.length==0){
//         res.json({
//             msg: 'must have a token!'
//         })
//     }else{
//         next(); 
//     }
// }
// app.use(valid_name_middleware); //最优先检测token

// ====================Static Pages====================
// app.use(express.static('static',{
//     extensions:['html'] // 访问127.0.0.1:3000/index自动添加html后缀
// }))


// ===================MAIN FUNCTIONS====================
const memberRouter = require('./router/quiz');

app.use('/quiz', cors(), memberRouter) 


app.get('/:category', cors(), (req, res, next)=>{
    try{
        let {category} = req.params
        let {id, flag} = req.query
        res.json({
            category,
            id,
            flag,
        })
    }catch(err){
        next(err)
    }
})



app.post('/form', (req, res)=>{
    res.json({
        url: req.path,
        msg: "POST data succuessfuly!"
    })
})

// =====================Error Handler========================
function error_handler_middleware(err, req, res ,next){
    if(err){
        let {message} = err;
        res.status(500)
        .json({
            msg: `${'My Sever Error: '+ message || 'Server Exception'}`
        })
    }else{

    }
}

// 404 error
function not_found_handler(req,res,next){
    res.json({
        msg: 'api 404 not found'
    })
}

app.use(not_found_handler)
app.use(error_handler_middleware)

// ==========================Port Listening==========================
app.listen(port,()=>{
    console.log('Service Start')
})