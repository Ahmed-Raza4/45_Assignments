//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

//Persons name in array
let names:string[] = ["Ali", "Umer", "Imran", "Kashif", "Kamran"];

//print message with each person
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some Python today?`); 
}