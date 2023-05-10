/**
 * File management
 */
const fileManager = require("fs");
const dataFiles = new Map();

dataFiles.set("about-pics","../data/about-pics.json");
dataFiles.set("users","../data/users.json");
dataFiles.set("jars","../data/jars.json");
dataFiles.set("memories","../data/memories.json");

let picsList = JSON.parse(fileManager.readFileSync(dataFiles.get("about-pics")));

/**
 * Server management
 */
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/api-content",function(req,res){
    // console.log(req.body.formId);
    res.json(JSON.stringify(picsList));
});

app.post("/form", function(req,res){
    req.body.formId;
    res.json(`Data submitted`);
});

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});