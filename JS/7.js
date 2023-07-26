document.addEventListener('keydown', function(event){
    if(event.code == "ArrowUp" && focussed){
        var rect = document.getElementById("recTangle");
        deffHeigh += 10;
        rect.style.height = deffHeigh + "px";
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == "ArrowDown" && focussed){
        var rect = document.getElementById("recTangle");
        deffHeigh -= 10;
        rect.style.height = deffHeigh + "px";
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == "ArrowLeft" && focussed){
        var rect = document.getElementById("recTangle");
        deffWigh -= 10;
        rect.style.width = deffWigh + "px";
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == "ArrowRight" && focussed){
        var rect = document.getElementById("recTangle");
        deffWigh += 10;
        rect.style.width = deffWigh + "px";
    }
})
var rect = document.getElementById("recTangle");

rect.addEventListener('click', function(){
    focussed = !focussed;
    if(focussed){
        document.getElementById("recTangle").style.borderWidth = 10 +"px"
    }
    else{
        document.getElementById("recTangle").style.borderWidth = 2 +"px"
    }
})

document.addEventListener('keydown', function(event){
    if(event.code == "Digit1" && focussed){
        rect.style.backgroundColor = "#e74949"
    }
    else if(event.code == "Digit2" && focussed){
        rect.style.backgroundColor = "#50cb45"
    }
    else if(event.code == "Digit3" && focussed){
        rect.style.backgroundColor = "#e19743"
    }
    else if(event.code == "Digit4" && focussed){
        rect.style.backgroundColor = "#eb82f7"
    }
    else if(event.code == "Digit5" && focussed){
        rect.style.backgroundColor = "#f2f044"
    }
    else if(event.code == "Digit6" && focussed){
        rect.style.backgroundColor = "#6c6af2"
    }
    else if(event.code == "Digit7" && focussed){
        rect.style.backgroundColor = "#ffb5e5"
    }
    else if(event.code == "Digit8" && focussed){
        rect.style.backgroundColor = "#cbffb5"
    }
    else if(event.code == "Digit9" && focussed){
        rect.style.backgroundColor = "#83f4c9"
    }
    else if(event.code == "Digit0" && focussed){
        rect.style.backgroundColor = "#ffffff"
    }
})