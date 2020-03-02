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
function postDrink(drink) {
    const cocktails = getDrink();
    // Push updates the original array
    cocktails.drinks.push(drink);
    fs.writeFileSync(path.join(__dirname, "./data/drinks.json"), JSON.stringify(cocktails));
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
});

//Post Request - have to loop through JSON?
// app.post("/drinks", (req, res) => {
//     const drink = req.body.drink;
//     const drinks = postDrink(drink);
//     res.json(drinks); //not latching on when I push?
//   });


//Listening Port
app.listen(3000, () => {
    console.log("Server is listening on port 3000!");
  });


