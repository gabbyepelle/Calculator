const add = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

const operate = function(num1, operator, num2){
    return operator(num1, num2)
}




const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
const percent = document.querySelector('#percent');
const negative = document.querySelector('#negative');

const addition = document.querySelector('#addition');
const subtraction = document.querySelector('#subtraction');
const multiplication = document.querySelector('#multiplication');
const division = document.querySelector('#division');
const equals = document.querySelector('#equals');



let num1 = 0;
let operator = "";
let num2 = 0;
let res = 0;
let displayVar = "";



numbers.forEach((number)=>{
    number.addEventListener('click', ()=>{
        if(typeof(displayVar) === 'number'){
            displayVar = number.dataset.value;
            display.textContent = displayVar;
        }else{
            if(displayVar.length < 16){
                displayVar += number.dataset.value;
                display.textContent = displayVar;
            }
        }
        console.log(typeof(displayVar))
        
    })
})

clear.addEventListener('click', ()=>{
    display.textContent = "0"
    displayVar = "";
    num1=0;
    num2=0;
    res=0;
    operator = "";
})

decimal.addEventListener('click', ()=>{
    if(displayVar === "" || typeof(displayVar)!=='string'){
        displayVar = "0."
    }else if(!displayVar.includes('.') && typeof(displayVar === 'string')){
        displayVar += ".";
    }
    console.log(displayVar)
    display.textContent = displayVar;
})

percent.addEventListener('click', ()=>{
   //round answers 
    let val = parseFloat(displayVar)/100
    console.log(val)
    if(!val){
        val = 0
    }
   
    displayVar = val
    display.textContent = displayVar;
})

negative.addEventListener('click', ()=>{
    if(displayVar[0] !== '-'){
        displayVar = '-' + displayVar;
    }else{
        displayVar = displayVar.slice(1);
        }
    display.textContent = displayVar;
    console.log(`negation: ${displayVar}`)

})

addition.addEventListener('click', ()=>{
    if(operator){//this is for when there are repeated operations without pressing the equals sign
        console.log('here')
        if(displayVar){
            num2 = parseFloat(displayVar)
        }else{
            num2=0
        }
        res = operate(num1, operator, num2);
        if(res === "NaN"){
            res = 0
        }
        displayVar = res
        display.textContent = displayVar;
       }
       
       if(displayVar){
        num1 = parseFloat(displayVar);
       }else{
        num1=0;
       }
       operator = add;
       displayVar = "";
})

subtraction.addEventListener('click', ()=>{
    if(!displayVar){//negates a value 
        if(displayVar[0] !== '-'){
            displayVar = '-' + displayVar;
        }else{
            displayVar = displayVar.slice(1);
            }
        display.textContent = displayVar;
    }else{
        if(operator){
            if(displayVar){
                num2 = parseFloat(displayVar)
            }else{
                num2=0
            }
            res = operate(num1, operator, num2);
            if(res === "NaN"){
                res = 0
            }
            displayVar = res
            display.textContent = displayVar;
           }
        num1 = parseFloat(displayVar);
        operator = subtract;
        displayVar = "";
    }
 })

 multiplication.addEventListener('click', ()=>{
    console.log(`display: ${displayVar}`)
    if(operator){
        if(displayVar){
            num2 = parseFloat(displayVar)
        }else{
            num2=1
        }
        res = operate(num1, operator, num2);
        if(res === "NaN"){
            res = 0
        }
        displayVar = res
        display.textContent = displayVar;
       }
        num1 = parseFloat(displayVar);
        operator = multiply;
        displayVar = "";
 })

 division.addEventListener('click', ()=>{
    if(operator){
        if(displayVar){
            num2 = parseFloat(displayVar)
        }else{
            num2=1
        }
        res = operate(num1, operator, num2);
        if(res === "NaN"){
            res = 0
        }else if (res.toString().length > 15){
            res = res.toFixed(8)
        }
        displayVar = res
        display.textContent = displayVar;
       }
    num1 = parseFloat(displayVar);
    operator = divide;
    displayVar = "";
    
 })

equals.addEventListener('click', ()=>{
    num2 = parseFloat(displayVar);
    res = operate(num1, operator, num2);
    if(res.toString().length> 15){
        res = res.toFixed(8)
    }
    if(res === "NaN"){
        res = 0
    }
    displayVar = res;


    display.textContent = displayVar;
    num1=0;
    num2=0; 
    operator =""
})


//adding keyboard support

const digits = "123456789";

document.addEventListener('keydown', (e)=>{
    if(digits.includes(e.key)){
        if(typeof(displayVar) === 'number'){//clears out display once calculation is performed
            displayVar = e.key
            display.textContent = displayVar;
        }else{
            if(displayVar.length < 16){
                displayVar += e.key
                display.textContent = displayVar;
            }
        }
    }else if(e.key === "Enter" || e.key === "=" ){
       equals.click()
    }else if(e.key === "+"){
        addition.click()
    }else if(e.key === "-"){
        subtraction.click()
    }else if(e.key === "*"){
        multiplication.click()
    }else if(e.key === "/"){
        division.click()
    }else if(e.key === "."){
        decimal.click()
    }else if(e.key === "%"){
        percent.click()
    }

})
