const greeting = document.getElementById("greeting");
greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
const username = window.prompt("What is your name?", "Jane");
greeting.textContent = "Welcome to my website, " + username + "!";