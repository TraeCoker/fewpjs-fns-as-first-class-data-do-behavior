/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let time = parseInt(timeString) 
  

  if (time < 12) {
    return "Good Morning"
  }

  if (time >= 12 && time < 17) {
    return "Good Afternoon"
  }

  if (time > 17 ) {
    return "Good Evening"
  }

}

function displayMessage (message) {
  let greeting = document.querySelector("#greeting");
  greeting.innerHTML = message;
}
