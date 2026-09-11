// ===============================
// MEMORIES DIARY - JAVASCRIPT
// ===============================

// Password
const correctPassword = "122021";

// Get elements
const passwordInput = document.getElementById("passwordInput");
const enterBtn = document.getElementById("enterBtn");
const errorMessage = document.getElementById("errorMessage");

const homePage = document.getElementById("homePage");
const memoriesPage = document.getElementById("memoriesPage");

const backBtn = document.getElementById("backBtn");


// ===============================
// PASSWORD CHECK
// ===============================

function checkPassword() {

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        // Hide home page
        homePage.classList.remove("active");

        // Show memories page
        memoriesPage.classList.add("active");

        // Clear error
        errorMessage.textContent = "";

        // Clear password box
        passwordInput.value = "";

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        errorMessage.textContent = "Wrong password ❤️ Try again.";

        passwordInput.value = "";

        // Small shake animation
        passwordInput.classList.add("shake");

        setTimeout(() => {
            passwordInput.classList.remove("shake");
        }, 400);
    }
}


// ===============================
// ENTER BUTTON
// ===============================

enterBtn.addEventListener("click", checkPassword);


// ===============================
// PRESS ENTER TO UNLOCK
// ===============================

passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkPassword();
    }

});


// ===============================
// BACK BUTTON
// ===============================

backBtn.addEventListener("click", function() {

    memoriesPage.classList.remove("active");
    homePage.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// FLOATING BACKGROUND ELEMENTS
// ===============================

const background = document.querySelector(".background-elements");

const symbols = ["♥", "♡", "🌷", "✦", "✧", "✨"];

function createFloatingElement() {

    if (!background) return;

    const element = document.createElement("span");

    element.classList.add("float-item");

    element.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    // Random position
    element.style.left = Math.random() * 100 + "%";

    // Random size
    const size = Math.random() * 15 + 12;
    element.style.fontSize = size + "px";

    // Random animation duration
    const duration = Math.random() * 8 + 8;
    element.style.animationDuration = duration + "s";

    // Random delay
    element.style.animationDelay =
        Math.random() * 5 + "s";

    background.appendChild(element);

    // Remove after animation
    setTimeout(() => {
        element.remove();
    }, (duration + 5) * 1000);
}


// Create floating elements continuously
setInterval(createFloatingElement, 700);


// Initial floating elements
for (let i = 0; i < 15; i++) {
    setTimeout(createFloatingElement, i * 200);
}