const express = require('express'),
bodyParser = require('body-parser'),
ejs = require('ejs'),
app = express();

let items = ["Buy food", "Cook food", "Eat food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static("public"));

app.get("/", function(req, res){
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    console.log(item);
    
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});