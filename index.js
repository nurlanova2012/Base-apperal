var input = document.getElementById("email");
var button = document.getElementById("button");
var form = document.querySelector(".form");
var messageContainer = document.querySelector(".message-container");
var errorMessage = document.querySelector(".error-message");
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var email = input.value.trim();

  if (email === "" || !emailRegex.test(email)) {
    messageContainer.textContent = "Please provide a valid email";
    errorMessage.style.display = "block"

  } else {
    messageContainer.textContent = "We got your message!"
  }
});
