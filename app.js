const express=require('express')

const app=express()

app.use('/',(req,res,next)=>{
    res.send("<h1>welcom to nodejs</h1>")
})
app.listen(8080)
