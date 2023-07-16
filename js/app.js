const screenDisplay = document.querySelector('.screen')
const button = document.querySelectorAll('button') 
console.log(button)

let calculation = []


function calculate(button) {
   //collects the content of the button 
    const value = button.textContent
    

    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    }
    else if (value === "=") {
        screenDisplay.textContent = eval(calculation.join(''))
        calculation = []
    }
    else {
        calculation.push(value)
    
    console.log(calculation)

    screenDisplay.textContent = calculation.join('')

}
    
}
//call back to calculate when the button is clicked

button.forEach(button => button.addEventListener('click',() => calculate(button)));