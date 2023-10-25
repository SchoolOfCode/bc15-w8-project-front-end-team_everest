import { conversationStarters } from './convo_starters.js';
const { v4: uuidv4 } = require('uuid');

console.log(conversationStarters);
let buttonText = document.getElementById("apodButton")

//Changes the button text back from 'Please wait!'
function changeButtonText() {
    buttonText.textContent = ("Get new Icebreaker")}

// Create button event
let button = document.getElementById("apodButton")
// Trigger event when button is clicked
button.addEventListener("click", changeText)

// Async function which will complete API request.
// Then parses the API response to return an OBJECT.

// async function returnAPOD() {
//     console.log("Fetch request is running...");
//     buttonText.textContent = ("Please wait!")

//     try {
//         const response = await fetch("https://api.nasa.gov/planetary/apod?count=1&api_key=jom8FVWWcBk1c7oAgbNiDRgtLNaOwGxR6KgF7kk2");

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         //Changes the button text

//         return data
//     } catch (error) {
//         console.error('Error fetching APOD data:', error);
//     }
// }

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


