import { conversationStarters } from './convo_starters.js';

console.log(conversationStarters);
let buttonText = document.getElementById("apodButton")

//Changes the button text back from 'Please wait!'
function changeButtonText() {
    buttonText.textContent = ("Get new Icebreaker")}

// Create button event
let button = document.getElementById("apodButton")
// Trigger event when button is clicked
button.addEventListener("click", changeText)

// Function to pass in the API result.

const newText = await returnAPOD();

// Looks for the first item in the object, this will change every time, the API retrieves a random image each call.
let randomNumber = Math.random
console.log(randomNumber);


// Parse API data and return new, required variables.
let newApodText = newText[random]["explanation"]
let newApodImage = newText[random]["hdurl"]

// Selects DOM elements
let description = document.getElementById("apodText")
let imageElement = document.getElementById("apodImage")

// Assigns parsed data to DOM elements
description.textContent = newApodText
imageElement.src = newApodImage;


