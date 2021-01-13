/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(hour) {
    if (parseInt(hour) < 12) {
        return 'Good Morning'
    } else if (parseInt(hour) > 17) {
        return 'Good Evening'
    } else return 'Good Afternoon'
}

function displayMessage(returnvalueofgreet) {
    document.getElementById('greeting').innerText = returnvalueofgreet
}