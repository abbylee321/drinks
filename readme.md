## VIRTUAL DRINKS

This week, I created a virtual bartending website, where you can access a list of drinks and add your own to the list. I used the Npm package drinks. 
[Drinks] (https://www.npmjs.com/package/drinks).

## PROCESS
### Overview 
This week was a lot of education in terms of learning node.js and how it interacts with the client side. I wanted to understand the types of HTTP requests : GET, PUT, PUSH, DELETE, so focused more on those concepts rather than the design. I worked through the backend guide and workbook to understand these concepts. 

## DEVELOPMENT 
I didn't realize the proper structure of JSON files until I ran into issues using my file to push to my array. I wanted to access the "name" of the drinks and ignore the "min" and "max", however, it was difficult for me to access the name itself since there was no higher "drinks" object. 

![jsonfile](https://github.com/abbylee321/Week4/blob/master/json-drinks.png)

After understanding the JSON file, I wanted to display all the drink names on screen through the button click. That required connecting the server side and the client side, a relationship that was quite confused by. I met with Cassie to help me explain their separation and how they communicated was through the Fetch API. I would use the async/await to create the Fetch API. 


![serverclient](https://github.com/abbylee321/Week4/blob/master/Server%2BClient%20Overview.jpg)


First, to test that I could get all the data I did a console.log on the button click. Next, I used innerHTML to display the items on screen. Originally, I tried to to drinks.innerHTML, but that was throwing an error since that was a json file. Working with a classmate, Aditya, he recommended creating a separate element to append my text to and changed to text.innerHTML to display the items in a list. 

I decided to add another level and have the user add a drink to the list. When I worked through the workbook, I tried to adopt the POST method, and tried to push to my array, but this is where structurally the JSON interfered with me executing my code. To add a drink, I created a function :
function addDrink(drink) {
	const cocktails = getDrink();  //previous function to get a drink
	cocktails.drinks.push(drink); 
	fs.writerFileSync(path.join(__dirname, "./data/drinks.json"), JSON.stringify(drinks));)

}

I spent lots of time fiddling with my addDrink function and consulted a classmate, Jason, who told me there were no objects within the json file. So I edited my code instead of saying cocktails.drinks.push(drink) it said cocktails.push(drink). I added another event listener to my input field and Jason helped me with structuring the client side code of the input field. 

## GENERAL THOUGHTS / QUESTIONS

I think this week was particularly challenging to understand how node.js works. I also think that working with certain JSONs and APIs is something still to get used to.

## NEXT STEPS

Eventually, I want a user to randomly select a drink upon a GET request, adding a drink/item on a POST request, replacing an item with PUT request and deleting something on a DELETE request as if they were their own virutal bartender. 

## ACKNOWLEDGEMENTS

* Cassie Tarakajian
* Aditya Jain
* Jason Tse







