var actual;
var slides;
init = function(){
    var img = document.getElementsByTagName("img")[0];
    img.height = window.innerHeight-100;
    img.witdh = window.innerWidth-100;
    slides = document.getElementsByTagName("div");
    actual = 0;
    slides[actual].style.MozTransform = "scale(1)";
}

keyDetect = function(key){
    if(key.keyCode == 37){
        slideLeft();
    }
    if(key.keyCode == 39){
        slideRight();
    }
}

apper = function(){
    setInterval(function(){
        slides[actual].style.MozTransform = "scale(1)";
    },500);
}

disapper = function(){
    slides[actual].style.MozTransform = "scale(0)";
}

slideRight = function(){
    if(actual<(slides.length-1) && actual>=0){
        disapper();
        slides[actual].style.display = "none";
        actual++;
        slides[actual].style.display = "";
        apper();
    }
    else{
        disapper();
        slides[actual].style.display = "none";
        actual = 0;
        slides[actual].style.display = "";
        apper();
    }
}

slideLeft = function(){
    if(actual<=(slides.length-1) && actual>0){
        disapper();
        slides[actual].style.display = "none";
        actual--;
        slides[actual].style.display = "";
        apper();
    }
    else{
        disapper();
        slides[actual].style.display = "none";
        actual = (slides.length-1);
        slides[actual].style.display = "";
        apper();
    }
}
