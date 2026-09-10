const audio = document.getElementById('audio');
const player = document.getElementById('player');
const playBtn = document.getElementById('playBtn');
const progressFill = document.getElementById('progressFill');
const progressArea = document.getElementById('progressArea');
const currentTime = document.getElementById('currentTime');

function formatTime(sec) {
    if (!isFinite(sec)) return '0:00';
    const min = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${min}:${s.toString().padStart(2, '0')}`;
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener('play', () => player.classList.add('playing'));
audio.addEventListener('pause', () => player.classList.remove('playing'));
audio.addEventListener('ended', () => {
    player.classList.remove('playing');
    progressFill.style.width = '0%';
    currentTime.textContent = '0:00';
});

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        progressFill.style.width = (audio.currentTime / audio.duration) * 100 + '%';
        currentTime.textContent = formatTime(audio.currentTime);
    }
});

audio.addEventListener('loadedmetadata', () => {
    currentTime.textContent = '0:00';
});

progressArea.addEventListener('click', (e) => {
    if (!audio.duration) return;
    const rect = progressArea.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
});

// --- Subtle particles ---
(function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let w, h;
    let particles = [];
    const count = 28;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    function spawn() {
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.8 + 0.4,
                vx: (Math.random() - 0.5) * 0.15,
                vy: -Math.random() * 0.25 - 0.05,
                alpha: Math.random() * 0.35 + 0.08,
                pulse: Math.random() * Math.PI * 2
            });
        }
    }

    function update() {
        ctx.clearRect(0, 0, w, h);
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.pulse += 0.02;
            if (p.y < -10) {
                p.y = h + 10;
                p.x = Math.random() * w;
            }
            if (p.x < -10) p.x = w + 10;
            if (p.x > w + 10) p.x = -10;
            const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(201, 169, 110, ${a})`;
            ctx.fill();
        }
        requestAnimationFrame(update);
    }

    resize();
    spawn();
    window.addEventListener('resize', () => {
        resize();
        spawn();
    });
    update();
})();