const express = require("express")
const app = express()
const port = process.env.PORT ||3000;
const http = require(`http`).Server(app)
const io = require('socket.io')(http);
const path = require('path');

app.get ("/",(req,res)=>{
res.sendFile(path.join(__dirname,'src/index.html'))
})

io.on('connection',socket=>{
    console.log("A user connected");
    socket.on('disconnect',()=>{
        console.log("A user disconnected");
    })
    socket.on("message",msg=>{
        console.log("cline mmsg"+msg);
    })
    })
console.log("hello ankush")
http.listen(port,()=>{
    console.log(`app listening on port ${port}`)})