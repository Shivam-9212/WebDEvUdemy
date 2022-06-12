const express = require("express");
const parser = require("body-parser");
const json_data = require("./data.json")

const app = express();
app.use(express.static("public"));

app.get("/",function(req, res){
  res.sendFile(__dirname+'/index.html');
  console.log(json_data);
  // const data = JSON.parse(json_data);
});

app.listen(4000, function(req, res){
  console.log("at port 4000");
});
