let items = document.querySelectorAll('.allowActive');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.75 }); // 75% of the item should be in view

items.forEach(item => observer.observe(item));



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