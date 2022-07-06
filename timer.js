let timer = document.getElementById("timer");
let startButton = document.getElementById("start");
let minutes = "25";
let seconds = "10";

startButton.addEventListener("click", function () {
    let numSecs = parseInt(seconds);
    while(numSecs > 1) {
        setTimeout(function(){
        timer.innerHTML = changeTime(minutes, seconds);
        console.log(`${numSecs}`)
        numSecs--;
        })
    }
});





console.log(timer);

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  
function changeTime(minutes, seconds) {
    setTimeout(function(){
        console.log("Executed after 1 second");
    }, 1000)
};

