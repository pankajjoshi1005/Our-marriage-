// Countdown Timer
function countdown() {
    const targetDate = new Date("Nov 12, 2024 12:00:00").getTime();
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
    "My heart is perfect because you are inside.",
    "You are my today and all of my tomorrows.",
    "In you, I’ve found the love of my life and my closest friend.",
    "You are the peace I crave in this chaotic world.",
    "Your smile is my favorite hello and hardest goodbye.",
    "Love isn’t something you find; it’s something that finds you.",
    "My heart is, and always will be, yours.",
    "I saw that you were perfect, and I loved you. Then I saw you weren’t, and I loved you even more.",
    "With you, every moment feels like a beautiful dream.",
    "I love you not only for who you are but for who I am when I’m with you.",
    "You are the best thing I never planned.",
    "Your love is the journey I never want to end.",
    "I’d choose you in every lifetime.",
    "Home is wherever I’m with you.",
    "Your love is the light that guides me through my darkest days.",
    "You’re the reason I look down at my phone and smile.",
    "I fall in love with you more every day.",
    "You are the missing piece I never knew I was searching for.",
    "Your love makes my world go round.",
    "My heart beats for you, now and forever."
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

    function explode(x, y) {
        const colors = ['#ff4d4d', '#ffa500', '#00cc44', '#3399ff'];
        for (let i = 0; i < 100; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 2;
            particles.push({
                x: x,
                y: y,
                dx: Math.cos(angle) * speed,
                dy: Math.sin(angle) * speed,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
            particle.x += particle.dx;
            particle.y += particle.dy;
            ctx.fillStyle = particle.color;
            ctx.fillRect(particle.x, particle.y, 4, 4);

            if (particle.x < 0 || particle.x > canvas.width || particle.y > canvas.height) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    explode(canvas.width / 2, canvas.height / 2);
    animate();
}
