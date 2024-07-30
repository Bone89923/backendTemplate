const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
let mongStr = "mongodb+srv://b0n3:Potsandpans@cluster0.ijadcwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(bodyParser.urlencoded({ extended : true }));
app.listen(3000, () => {
    console.log("listening on 3000.");
})
MongoClient.connect(mongStr, (err, client) => {
    if (err) {
        return console.error(err)
    };
    console.log("Connected to database.")
});
app.get('/', (req, res) => { 
    res.sendFile(__dirname + "/index.html")
});
app.post("/quotes", (req, res) => {
    console.log(req.body)
});
