let music = document.getElementById("music");
let IconPlay = document.getElementsByClass("far fa-play-circle")
let IconPause = document.getElementsByClassName("far fa-pause-circle")

IconPlay.onclick = function(){
    music.play();
}

IconPause.onclick = function(){
    music.pause();
}

