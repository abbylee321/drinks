window.addEventListener('load',function() {
    var button = document.getElementById('get-request');
    var text = document.getElementById('drinks-list');

    button.addEventListener("click", async function() {
      console.log("YOU CLICKED");
      const response = await fetch("/drinks");
      const drinks = await response.json(); //returning value 
      
      //console.log(drinks) - print out all the data : 
      text.innerHTML = DrinksList(drinks); //how to do innerHTML with async?
    });
});
function DrinksList(drinks) {
    return drinks.map((drink) => {
        return `<li>${drink.name}</li>`;
    }).join("");
}

// function getRandomDrink(drinks) {
//     return drinks[Math.floor(Math.random()*drinks.length)];
//   }

//showing the data - one version 
// window.addEventListener("DOMContentLoaded", () => {
//     const toppingsList = document.getElementById("get-request");
//     fetch("/drinks").then(res => res.json()).then((data) => {
//       toppingsList.innerHTML = ToppingsList(data.drinks2);
//     });
//   });
