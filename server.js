//adding dependencies 
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

//express stuff
app.use(express.static("public"));
app.use(express.json());

//REQUEST FUNCTIONS
//getDrink
function getDrink() {
    const contents = fs.readFileSync(path.join(__dirname, "./data/drinks.json"));
    const obj = JSON.parse(contents);
    return obj;
  }

//postDrink
function addDrink(drink) {
    const cocktails = getDrink(); //reading whole list of json
    // Push updates the original array
    cocktails.push(drink); //putting new drink into json 
    fs.writeFileSync(path.join(__dirname, "./data/drinks.json"), JSON.stringify(cocktails)); //storing data on computer
    return cocktails;
  }

//main-page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
  });

//about page
  app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views/about.html"));
  });

//Get Request 
app.get("/drinks", (req, res) => {
    const drinks = getDrink();
    res.json(drinks);
    console.log(drinks);
});

//Post Request - have to loop through JSON?
app.post("/drinks", (req, res) => {
  const drink = req.body;
  console.log(drink);
    const drinks = getDrink();
    const moredrinks = addDrink(drink);
    res.json(moredrinks); //not latching on when I push?
  });


//Listening Port
app.listen(3000, () => {
    console.log("Server is listening on port 3000!");
  });


