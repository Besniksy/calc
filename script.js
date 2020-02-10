var numOnClick = document.querySelectorAll('.num')
var operator = document.querySelectorAll('#operator')
var equal = document.getElementById('equal')
var screen2 = document.getElementById('calc-screen2') 
var screen = document.getElementById('calc-screen') 
var clear = document.getElementById('clear')
var point = document.getElementById('point')
var numsArray = []
var char1;
var evaluated;
var count = 0;
var countOper = 0;

function char1Function(){
    var clickedNums = this.innerText
    numsArray.push(clickedNums)
    char1 = numsArray.join("")
    screen2.innerText = char1
    evaluated = eval(char1)
    countOper = 0;
    
}

clear.addEventListener('click', function(){
    numsArray = []
    screen2.innerText = ""
    screen.innerText = ""
    count = 0;
})

equal.addEventListener("click", function(){
    screen.innerText = evaluated
    numsArray = []
    numsArray.push(evaluated)
})

point.onclick = function () {
    count++
    if(count === 1){
        numsArray.push(this.innerText)
        char1 = numsArray.join("")
        screen2.innerText = char1
    }
}

for(i=0; i<operator.length; i++){
    operator[i].onclick = function() {
        countOper++
        if(countOper === 1){
            numsArray.push(this.innerText)
            char1 = numsArray.join("")
            screen2.innerText = char1
        }
    }
}

for(i=0; i<numOnClick.length; i++){
    numOnClick[i].addEventListener('click', char1Function)
}

for(i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        count = 0;
    })
}
