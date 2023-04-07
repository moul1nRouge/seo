let f = document.getElementById("firstNum");//1
let s = document.getElementById("secondNum");//2
let t = document.getElementById("thirtNum");//3

let countf = 0
let counts = 0
let countt = 0

let firstNumber;
let secondNumber;
let thirtNumber;

function updateNumbers() {
    const block = document.getElementById("myBlock");
    const blockTop = block.getBoundingClientRect().top;
    const blockBottom = block.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (blockTop <= windowHeight && blockBottom >= 0) {
        firstNumber = setInterval(function(){
            f.innerText = countf + 1 + 'k';
            countf++;

            if (countf >= 11) {
                clearInterval(firstNumber);
            }
        },160)

        secondNumber = setInterval(function(){
            s.innerText = counts + 1 + '+';
            counts++;

            if (counts >= 300) {
                clearInterval(secondNumber);
            }
        },01)

        thirtNumber = setInterval(function(){
            t.innerText = countt + 1 + '+';
            countt++;

            if (countt >= 60) {
                clearInterval(thirtNumber);
            }
        },30)

        window.removeEventListener('scroll', updateNumbers);
    }
}

window.addEventListener('scroll', updateNumbers);