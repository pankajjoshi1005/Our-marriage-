// Countdown Timer
function countdown() {
    const targetDate = new Date("Nov 12, 2024 12:01:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "Congratulations! You're married!";
    }
}

const interval = setInterval(countdown, 1000);

// Random Love Quotes
const quotes = [
    "Together is a wonderful place to be.",
    "Every love story is beautiful, but ours is my favorite.",
    "You are the sunshine that makes my day.",
    "You have my whole heart, for my whole life.",
    "Our journey together begins soon, and I can't wait.",
    "You make my heart smile every single day.",
    "I fell in love with you, not for how you look, but for who you are.",
    "Being with you feels like home.",
    "My heart is perfect because you are inside."
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = `"${quotes[randomIndex]}"`;
}

window.onload = displayQuote;
