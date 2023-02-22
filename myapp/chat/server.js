const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

server.listen(process.env.PORT || 3000, function () {
  console.log("Server running in port 3000");
  //   console.log(__dirname + "/public");
});

app.use(express.static(__dirname + "/public"));
