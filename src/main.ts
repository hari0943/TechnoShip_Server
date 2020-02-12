import express from "express"

const app : express.Application=express()

app.get("/",(_req :express.Request,res :express.Response)=>{
    res.send("haii")
})

app.listen(5000,()=>{console.log("server created")})