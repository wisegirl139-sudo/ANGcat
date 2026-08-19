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

happy.addEventListener("click",function(){
    sad.style.display="none";
    angry.style.display="none";
    anxious.style.display="none";
})

sad.addEventListener("click",function(){
    happy.style.display="none";
    angry.style.display="none";
    anxious.style.display="none";
})

angry.addEventListener("click",function(){
    happy.style.display="none";
    sad.style.display="none";
    anxious.style.display="none";
})

angry.addEventListener("click",function(){
    happy.style.display="none";
    sad.style.display="none";
     angry.style.display="none";
})