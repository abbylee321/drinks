window.addEventListener('load',function() {
    var button = document.getElementById('get-request');
    var text = document.getElementById('drinks-list');

    var submitbutton = document.getElementById('add-drink');
    var inputfield = document.getElementById('drink-value');
    


    button.addEventListener("click", async function() {
      console.log("YOU CLICKED");
      const response = await fetch("/drinks");
      const drinks = await response.json(); //returning value 
      
      //console.log(drinks) - print out all the data : 
        text.innerHTML = DrinksList(drinks); 
    });

    submitbutton.addEventListener("click", async function() {
        console.log("YOU CLICKED");
        const response = await fetch("/drinks",  {
            method: "POST",
            body: JSON.stringify( {
                "name":inputfield.value
        }),
            headers: {
                "Content-Type": "application/json "
            }
        }); 
        const drinks = await response.json();
        text.innerHTML = DrinksList(drinks); 
        console.log(drinks);

      });
});

function DrinksList(drinks) {
    return drinks.map((drink) => {
        return `<li>${drink.name}</li>`;
    }).join("");
}

