var number ;
var interval

var button = document.getElementById('btn');
var v0 = 0;
var v1 = 0;
var v2 = 0;
var v3 = 0;
var v4 = 0;
let i = 1;
function startCounter(){
    // number should initialise in the startcounter
    number = parseInt(document.getElementById("count").value);
    if(number <=0 || number > 99999 || isNaN(number)){
        alert("Please enter a valid number:")
        return;   
    }
    var cur = document.querySelectorAll('.current');
    var nxt = document.querySelectorAll('.next');
    var i = 0;
    interval = setInterval(function(){
        button.addEventListener('click',reset);
        if(i == number ){
            window.alert("Counter is Stopped");
            clearInterval(interval);
            return;
        }
        animate(cur, nxt, 4);
        i++;
    },1000);
         
}

function resetNumbers(currentNos, nextNos, end) {
    for(var i=0; i<end; ++i) {
        currentNos[i].innerText = 0;
        nextNos[i].innerText = 1;
    }
}


function animate(curr ,next, j){
        
        if(curr[j].innerText == 9){
            animate(curr, next , j-1);
        }

        next[j].classList.add('animate');
        setTimeout(function(){
            curr[j].innerText = next[j].innerText;
            // j++;
            next[j].classList.remove('animate');
            next[j].innerText = parseInt(next[j].innerText) +1;
            if(next[j].innerText > 9){
                next[j].innerText = 0;
            }
        },500);  
    // } 
    i++;
}

button.addEventListener('click',startCounter);
