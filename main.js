function doFirst(){

    var btn = document.getElementById('playButton');
    

    var showVideoDiv = document.getElementById('showVideoDiv');
    var myMovie = document.getElementById('myMovie');

    var centerside = document.getElementById("centerside");

    btn.addEventListener('click', playVideo, false);
}

function playVideo(){
   
    btn.style.display = 'none';

    showVideoDiv.style.display = 'block';
    myMovie.play();

    centerside.style.paddingTop="0px";
}

window.addEventListener('load',doFirst,false);