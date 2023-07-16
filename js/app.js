const screenDisplay = document.querySelector('.screen')
const button = document.querySelectorAll('button') 
console.log(button)

function calculate(button) {
    const value = button.textContent
    
}

button.forEach(button => button.addEventListener('click',() => calculate(button)));