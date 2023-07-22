window.onload = function (){
    var seconds = 0o0;
    var tens = 0o0;
    var start = document.getElementById("start")
    var stop = document.getElementById("stop")
    var reset = document.getElementById("reset")
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var interval


    start.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }


    stop.onclick =function(){
        clearInterval(interval);
    }


    reset.onclick = function(){
        clearInterval(interval)
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    }


    function startTimer(){
        tens++;

        if (tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        
        if (tens > 99){
            console.log(seconds);
            seconds ++
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
          }
    }
}