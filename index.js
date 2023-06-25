// References to the burger elements
const burgerIcon = document.querySelector(".burgerIcon");
const overlay = document.querySelector(".overlay");
const removeOldHeading = document.querySelector("header > img");
const exitOverlay = document.querySelector(".cross");
const bookmarkIcon = document.querySelector(".bookmarkIcon");

// Add an event listener to the burger icon
burgerIcon.addEventListener("click", () => {
  overlay.style.display = "block";
  burgerIcon.style.display = "none";
  bookmarkIcon.style.display = "none";
});

exitOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
  burgerIcon.style.display = "block";
  bookmarkIcon.style.display = "block";
});

// Reference to the fetures elemtns
const simpleBookmarking = document.querySelector(".simple");
const speedySearchin = document.querySelector(".speedy");
const easySharing = document.querySelector(".sharing");

const simpleBook = document.querySelector(".simpleBookmarking");
const speedSearch = document.querySelector(".speedysearch");
const easyShare = document.querySelector(".easyshare");

// Add event listner to the highlighted titles
simpleBookmarking.addEventListener("click", () => {
  simpleBook.style.display = "flex";
  speedSearch.style.display = "none";
  easyShare.style.display = "none";
});

speedySearchin.addEventListener("click", () => {
  simpleBook.style.display = "none";
  speedSearch.style.display = "flex";
  easyShare.style.display = "none";
});

easySharing.addEventListener("click", () => {
  simpleBook.style.display = "none";
  speedSearch.style.display = "none";
  easyShare.style.display = "flex";
});

// transform: rotate(180deg);
// color: hsl(0, 94%, 66%);

//Reference to the FAQ's

// const arrow = document.querySelector('.dropdown > img');

// arrow.addEventListener('click', () => {
// });

const emailInput = document.getElementById("email");
const incorrectEmailMessage = document.getElementById("incorrectEmail");
const emailInputt = document.querySelector('input[type="email"]');

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid) {
    // Valid email format
    incorrectEmailMessage.style.display = "none";
    emailInputt.style.border = "solid";
    emailInputt.style.borderColor = "hsl(0, 94%, 66%)";
  } else {
    // Invalid email format
    incorrectEmailMessage.style.display = "flex";
  }
});
