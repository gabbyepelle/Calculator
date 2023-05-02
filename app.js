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
    console.log(`displayVar: ${displayVar}`)
    console.log(`num1 : ${num1}`)
    console.log(`num2 : ${num2}`)
    console.log(`res: ${res}`)
    console.log(`operand: ${operator}`)
})

subtraction.addEventListener('click', ()=>{
    //needs to also negate a value
    console.log(`num1 :${num1}`)
    console.log(`num2 :${num1}`)
    console.log(`displayVar: ${displayVar}`)
    if(!displayVar){
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
        // console.log(num1);
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
    // console.log(num1);
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
    console.log(`equals: ${res}`)
    console.log(typeof(res))
})


