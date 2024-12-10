// script.js
function revealLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "block";
}
// script.js
const heart = document.getElementById('heart');
const letter = document.getElementById('letter');
const mainContainer = document.querySelector('.main-container');

heart.addEventListener('click', () => {
    mainContainer.style.display = 'none'; // Hide the main page
    letter.style.display = 'block';      // Show the letter
});
