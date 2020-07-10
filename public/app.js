var min = 0;
var sec = 0;
var ms = 0;
var interval;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msHeading = document.getElementById("ms");

function timer(){
        ms++;
        msHeading.innerHTML = ms++;
        if(ms >=100){
            secHeading.innerHTML= sec++;
            ms = 0;
        }
        else if (sec >= 60 ){
            min++;
            minHeading.innerHTML = min++;
            sec = 0;
        }
    }


function start(){
    Disable1();
    interval = setInterval(timer,10)
}

function Pause(){
    
    clearInterval(interval)
    Disable2();
}
function Stop(){
    
    min = 0;
    sec = 0;
    ms = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msHeading.innerHTML = ms;
    Pause()
    Disable2();
}

function Disable1(){
    document.getElementById("start").disabled = true;
}

function Disable2(){
    
    document.getElementById("start").disabled = false;

}