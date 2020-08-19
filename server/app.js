// api 
const path = require('path');
const express = require('express');
const app = express();
//  nodejs module
const httpServer = require('http').createServer(app);
//  socket enbaled server
const io = require('socket.io')(httpServer);
app.use(express.static("public"));
app.set("view engine","ejs");
io.on("connection", function (socket) {
    console.log("New client connected");
    console.log(socket.id);
    socket.on("color", function (color) {
        console.log(data);
        socket.broadcast.emit('colorchange', color);
    })
    socket.on("md", function (point) {
        console.log("hi");
        socket.broadcast.emit("onmd", point);
    })
    socket.on("mm", function (point) {
        socket.broadcast.emit("onmm", point);
    })
})

app.get("/h", function (req, res) {
    //res.sendFile(path.join(__dirname, '../client', 'index.html'));
    res.render("index");
})
//  connection
httpServer.listen(3000, function () {
    console.log("Server started at port 3000");
})