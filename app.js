const express = require('express'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    date = require(__dirname + '/date.js'),
    app = express();

const items = ["Buy food", "Cook food", "Eat food"],
    workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static("public"));

app.get("/", function(req, res){
    const day = date.getDate();
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    if(req.body.list != "Work List"){
        items.push(item);
        res.redirect("/");
    } else {
        workItems.push(item);
        res.redirect("/work");
    }
    console.log(req.body);
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});