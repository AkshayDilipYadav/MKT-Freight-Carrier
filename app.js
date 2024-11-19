let valueDisplays = document.querySelectorAll(".num1");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue.toString().padStart(3, '0');
    if(startValue == endValue){
        clearInterval(counter);
    }
}, duration);
});

//Number counter