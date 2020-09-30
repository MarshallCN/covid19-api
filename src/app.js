const express =  require('express')
const app = express();
const port = process.env.PORT || 3000
// =================自定义全局级别中间件==================
function valid_name_middleware(req, res, next){
    let {id} = req.query;
    if(typeof(id)=="undefined" || id.length==0){
        res.json({
            msg: 'must have an id!'
        })
    }else{
        next(); //交出控制权
    }
}
app.use(valid_name_middleware); //最优先检测id

// ======================GET, POST requests==============
app.get('/:category', (req, res, next)=>{
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
        url: req.path
    })
})

// ==========处理异常的应用级中间件，也可路由级=============
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

// 定义一个404中间件,由于404找不到不是异常，所以参数没有err对象
function not_found_handler(req,res,next){
    res.json({
        msg: 'api 404 not found'
    })
}

//异常处理放在所有路由最后面
app.use(not_found_handler)
app.use(error_handler_middleware)

// ==========================端口监听==========================
app.listen(port,()=>{
    console.log('Service Start')
})