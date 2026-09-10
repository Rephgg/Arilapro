function scrollToLetter() {
    document.getElementById('letterSection').scrollIntoView({ behavior: 'smooth' });
}

function createHeart() {
    const c = document.getElementById('floatingHearts');
    const h = document.createElement('div');
    h.className = 'fh';
    h.innerHTML = ['❤', '♥', '💖', '💕', '💗'][Math.floor(Math.random() * 5)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDuration = (Math.random() * 12 + 8) + 's';
    h.style.fontSize = (Math.random() * 12 + 10) + 'px';
    h.style.color = ['#C41E3A', '#9B1B30', '#E8395B', '#D4A853', '#6B0F1A'][Math.floor(Math.random() * 5)];
    c.appendChild(h);
    setTimeout(() => h.remove(), 22000);
}

setInterval(createHeart, 700);

function createConfetti() {
    const emojis = ['❤', '💖', '💕', '💗', '✨', '🌸', '💝', '🌹', '♥', '💓', '💘', '💝', '💐', '🎀'];
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'confetti';
            el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            el.style.left = Math.random() * 100 + 'vw';
            el.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 5000);
        }, i * 40);
    }
}

function openLightbox(el) {
    const img = el.querySelector('img');
    if (img) {
        document.getElementById('lb-img').src = img.src;
        document.getElementById('lightbox').classList.add('active');
    }
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});

// Scroll animations for reason cards
function animateCards() {
    const cards = document.querySelectorAll('.rcard');
    cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) {
            setTimeout(() => card.classList.add('visible'), (i % 10) * 40);
        }
    });
}

// Fade in for sections
function animateFadeIn() {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}

// Counter animation
let counterStarted = false;
function animateCounter() {
    const el = document.getElementById('counter');
    if (!el || counterStarted) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        counterStarted = true;
        let count = 0;
        const step = 3000 / 100;
        const timer = setInterval(() => {
            count++;
            el.textContent = count;
            if (count >= 100) {
                clearInterval(timer);
                el.style.transform = 'scale(1.1)';
                setTimeout(() => el.style.transform = 'scale(1)', 300);
            }
        }, step);
    }
}

window.addEventListener('scroll', () => {
    animateCards();
    animateFadeIn();
    animateCounter();
});

animateCards();
animateFadeIn();
animateCounter();
