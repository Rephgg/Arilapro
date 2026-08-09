var floatingEmojis = ['💖','💕','💗','💓','🌸','✨','🎀','💝'];
var floats = [];
function createFloater(){
    var c = document.getElementById('floaters');
    var d = document.createElement('div');
    d.className = 'float-item';
    d.innerHTML = floatingEmojis[Math.floor(Math.random()*floatingEmojis.length)];
    d.style.left = Math.random()*100 + 'vw';
    d.style.fontSize = (Math.random()*18+12) + 'px';
    d.style.animationDuration = (Math.random()*10+12) + 's';
    c.appendChild(d);
    setTimeout(function(){ d.remove(); }, 22000);
}
setInterval(createFloater, 900);

function toggleMusic(){
    var player = document.getElementById('musicPlayer');
    var btn = document.getElementById('musicBtn');
    if(player.paused){
        player.play().catch(function(){});
        btn.textContent = '🎵';
        btn.classList.add('playing');
    } else {
        player.pause();
        btn.textContent = '🔇';
        btn.classList.remove('playing');
    }
}

var letterOpened = false;
function openEnvelope(){
    if(letterOpened) return;
    letterOpened = true;
    document.getElementById('envelope').classList.add('open');
    setTimeout(function(){
        document.getElementById('envelopeScene').style.display = 'none';
        document.getElementById('letterContent').style.display = 'block';
        window.scrollTo({top:0, behavior:'smooth'});
    }, 1500);
}

var noCount = 0;
function sayNo(){
    noCount++;
    var btn = document.getElementById('noBtn');
    var msgs = ['Segura? 😢','Piénsalo bien 🥺','No te conviene 🥹','Ya no hay vuelta atrás 😤','Última oportunidad 💔','Imposible 😆'];
    if(noCount <= msgs.length){
        btn.textContent = msgs[noCount-1];
    } else {
        var yes = document.querySelector('.btn-yes');
        yes.style.fontSize = (parseFloat(window.getComputedStyle(yes).fontSize)+10) + 'px';
        btn.style.display = 'none';
    }
}

function sayYes(){
    var player = document.getElementById('musicPlayer');
    var btn = document.getElementById('musicBtn');
    if(player.paused){
        player.play().catch(function(){});
        btn.classList.add('playing');
    }
    launchConfetti();
    document.getElementById('letterContent').style.display = 'none';
    document.getElementById('celebration').classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
}

function launchConfetti(){
    var emojis = ['💖','💕','💗','💓','💝','✨','🌸','🎀','💘','🦋'];
    for(var i=0;i<120;i++){
        (function(i){
            setTimeout(function(){
                var c = document.createElement('div');
                c.className = 'confetti';
                c.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
                c.style.left = Math.random()*100 + 'vw';
                c.style.animationDuration = (Math.random()*3+2) + 's';
                document.body.appendChild(c);
                setTimeout(function(){ c.remove(); }, 5200);
            }, i*40);
        })(i);
    }
}

function openLightbox(el){
    var img = el.querySelector('img');
    if(img && img.src){
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('lightbox').classList.add('active');
    }
}
function closeLightbox(){
    document.getElementById('lightbox').classList.remove('active');
}
