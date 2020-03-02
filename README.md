## VIRTUAL DRINKS

This week, I created a virtual bartending website, where you can access a list of drinks and add your own to the list. I used the Npm package drinks. https://www.npmjs.com/package/drinks. You can get a list of drinks by clicking on the button "Get Drinks". You can also add to the list of drinks by entering your favorite drink into the input box, which you will see added to the list at the end. 

![Website](https://github.com/abbylee321/Week4/blob/master/Drinks%20Website.png)

## PROCESS
### Overview 
This week was a lot learning in terms of learning Node.js and how it interacts with the client side. I wanted to understand the types of HTTP requests : GET, PUT, PUSH, DELETE, so focused more on those concepts rather than the design. I worked through the backend guide and workbook. 

## DEVELOPMENT 
I didn't realize the proper structure of a JSON file until I ran into issues using my file to push to my array. Within the JSON were multiple sets of data with name of drink, min and max. I wanted to access the "name" of the drinks and ignore the "min" and "max", however, it was difficult for me to access the name itself since there was no higher "drinks" object. Next time doing this I would pick a JSON file that has objects or format in myself to include an object. 


After understanding the JSON file, I wanted to display all the drink names on screen through the button click. That required connecting the server side and the client side, a relationship that I was quite confused by. I met with Cassie to help me explain their separation and how they communicated was through the Fetch API. I would use the async/await to create the Fetch API. 


First, to test that I could get all the data I did a console.log on the button click. Next, I used innerHTML to display the items on screen. Originally, I tried to to drinks.innerHTML, but that was throwing an error since that was a JSON file. Working with a classmate, Aditya, he recommended creating a separate element to append my text to and changed to text.innerHTML to display the items in a list. 

I decided to add another level and have the user add a drink to the list. When I worked through the workbook, I tried to adopt the POST method, and tried to push to my array, but this is where structurally the JSON interfered with me executing my code. To add a drink, I created a function :

```
function addDrink(drink) {
	const cocktails = getDrink(); 
	cocktails.drinks.push(drink); 
	fs.writeFileSync(path.join(__dirname, "./data/drinks.json"), JSON.stringify(drinks));)

}
```

I spent lots of time fiddling with my addDrink function and consulted a classmate, Jason, who told me there were no object called "drinks" within the json file. So I edited my code instead of saying cocktails.drinks.push(drink), it said cocktails.push(drink).

```
function addDrink(drink) {
    const cocktails = getDrink(); 
    cocktails.push(drink);
    fs.writeFileSync(path.join(__dirname, "./data/drinks.json"), JSON.stringify(cocktails)); 
    return cocktails;
  }
```
I added another event listener to my input field and Jason helped me with structuring the POST method on the client side code of the input field. 

## GENERAL THOUGHTS / QUESTIONS

I think this week was particularly challenging to understand how node.js works. I also think that working with certain JSONs and APIs is something still to get used to. Overall, jumping into backend and parsing through JSON data and how it relates to the client side was a bit difficult to understand conceptual wise. Hypothetically, the different HTTP requests make sense, but the execution takes practice. It's nice that there is a consistent format with the HTTP requests in app.get("url", req, res) {}. I think the confusing part was the specific syntax used for each request. Also, the specific formats of JSONs
1. For example, for POST, the request was "req.body.variable". What is body and is it only used for POST?
2. I'm a bit confused as to what this line is doing - "fs.writeFileSync(path.join(__dirname, "./data/drinks.json"), JSON.stringify(drinks));)

## NEXT STEPS

Eventually, I want a user to randomly select a drink upon a GET request, adding a drink/item on a POST request, replacing an item with PUT request and deleting something on a DELETE request as if they were their own virutal bartender. 

## ACKNOWLEDGEMENTS

* Cassie Tarakajian
* Aditya Jain
* Jason Tse
* Ashwita Palekar




