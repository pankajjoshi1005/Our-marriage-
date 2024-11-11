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
        launchFireworks();
        playVideo();
    }
}

const interval = setInterval(countdown, 1000);

// Random Love Quotes
const quotes = [
    "Together is a wonderful place to be.",
    "Every love story is beautiful, but ours is my favorite.",
    "You are the sunshine that makes my day.",
    "You have my whole heart, for my whole life."
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = `"${quotes[randomIndex]}"`;
}

window.onload = displayQuote;

// Fireworks Animation
function launchFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.style.display = 'block';

    let particles = [];
    const explode = (x, y) => {
        for (let i = 0; i < 100; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 2;
            particles.push({
                x: x,
                y: y,
                dx: Math.cos(angle) * speed,
                dy: Math.sin(angle) * speed
            });
        }
    };
    explode(canvas.width / 2, canvas.height / 2);
}

// Play Google Drive Video
function playVideo() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'block';
    const video = document.getElementById('wedding-video');
    video.src += "&autoplay=1";
}
