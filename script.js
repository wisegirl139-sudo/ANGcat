const cat = document.getElementById("maincat");
const moods = document.getElementById("moods")

cat.addEventListener("click",function(){
    cat.src = "images/click.png"
    moods.style.display = "block";
})

const happy = document.getElementById("happy");
const sad = document.getElementById("sad");
const angry = document.getElementById("angry");
const anxious = document.getElementById("anxious");
const music = document.getElementById("music");

happy.addEventListener("click",function(){
    sad.style.display="none";
    angry.style.display="none";
    anxious.style.display="none";
    cat.src = "images/happy.png"
    music.innerHTML='<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4sKdJxZR5UfG69CvBmJCwc?utm_source=generator&si=21604b7c917847a3" width="60%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    document.body.className="happybg"
})

sad.addEventListener("click",function(){
    happy.style.display="none";
    angry.style.display="none";
    anxious.style.display="none";
    cat.src = "images/sad.png"
    music.innerHTML='<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7vWNLnchz6Q7S2fMCWuhAO?utm_source=generator&si=2411de3f61e74454" width="60%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    document.body.className="sadbg"
})

angry.addEventListener("click",function(){
    happy.style.display="none";
    sad.style.display="none";
    anxious.style.display="none";
    cat.src = "images/angry.png"
    music.innerHTML='<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6z3W7qKlkaktbYvqEHYato?utm_source=generator&si=c4cf911ff026483c" width="60%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    document.body.className="angrybg"
})

anxious.addEventListener("click",function(){
    happy.style.display="none";
    sad.style.display="none";
    angry.style.display="none";
    cat.src = "images/anxious.png"
    music.innerHTML='<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2xhRAbLHzmuzq7e0R9NEbn?utm_source=generator&theme=0&si=b73a92474b8a4849" width="60%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    document.body.className="anxiousbg"
})