const para = document.querySelector('h1');
const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
const text = para.innerText;

let iteration = 0;
let interval;

function randomText() {
   const str = text.split("").map((char, index) => {
      if (index < iteration) return char;
      return characters[Math.floor(Math.random() * characters.length)];
   }).join("");
   
   para.innerText = str;

   iteration += 0.25;
   if(iteration >= text.length) clearInterval(interval);
}

para.addEventListener("mouseenter", () => {
   clearInterval(interval); // stop existing animation if any
   iteration = 0; // reset
   interval = setInterval(randomText, 30);
});


/*
STEP BY STEP EXPLANATION

1) const para = document.querySelector('h1')
   - Find the first <h1> element in the HTML.
   - Save that element in the variable "para".

2) const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
   - This is a string of all letters (A–Z and a–z).
   - We will use this string to pick random letters from.

3) const text = para.innerText
   - Get the text inside the <h1> element and store it.
   - Example: if <h1>Hello</h1>, then text = "Hello".

4) para.addEventListener("mouseenter", () => { ... })
   - Add an event listener to the <h1>.
   - "mouseenter" means this will run when the mouse goes over the <h1>.

5) setInterval(() => { ... }, 30)
   - Start a timer that runs the inner code again and again.
   - It repeats every 30 milliseconds (very fast).
   - This makes the text keep changing quickly.

6) const str = text.split('').map((item, index) => { ... }).join("")
   - text.split('') turns the original text into an array of characters.
     Example: "Hello" -> ["H", "e", "l", "l", "o"].
   - .map(...) goes through each character and returns a NEW character.
   - We do NOT reuse the original character; we create a random one.
   - .join("") combines the array of random characters back into a single string.

7) return characters.split('')[Math.floor(Math.random() * 53)]
   - characters.split('') converts our long string into an array of letters.
   - Math.random() gives a random number between 0 and 1.
   - Math.random() * 53 gives a random number between 0 and 53.
   - Math.floor(...) turns it into an integer from 0 to 52.
   - We use that integer as an index to pick a random letter from the array.
   - So for each original letter, we get one random letter.

8) para.innerText = str
   - Replace the text inside the <h1> with our new random string.
   - Because setInterval keeps running, the text keeps changing very fast,
     creating a "glitch" or "hacking" style animation when we hover over it.
*/
