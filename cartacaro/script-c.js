function createSparkle(){
    var c=document.getElementById("sparkles");
    var s=document.createElement("div");
    s.className="sparkle";
    s.innerHTML=["✨","⭐","💫","🌟","✦"][Math.floor(Math.random()*5)];
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    s.style.animationDuration=(Math.random()*3+2)+"s";
    s.style.fontSize=(Math.random()*12+10)+"px";
    c.appendChild(s);
    setTimeout(function(){s.remove()},5000)
}
setInterval(createSparkle,400);

function openLightbox(el){
    var img=el.querySelector("img");
    if(img&&img.src){
        document.getElementById("lightbox-img").src=img.src;
        document.getElementById("lightbox").classList.add("active")
    }
}
function closeLightbox(){
    document.getElementById("lightbox").classList.remove("active")
}
