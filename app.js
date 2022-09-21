const express = require('express'),
bodyParser = require('body-parser'),
ejs = require('ejs'),
app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get("/", function(req, res){
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day});
});

app.post("/", function(req, res){
    req.body.newItem
});


app.post("/");

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});