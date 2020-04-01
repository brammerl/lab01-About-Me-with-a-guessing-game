import isYes from './isYes.js';


function startQuiz() {
    let correctAnswers = 0; 
    let name = '';

    const nameEntry = prompt('What is your name?');
    name = nameEntry;

    const confirmed = confirm('Are you sure you want to take this test?');
    if (confirmed === false) {
        return;
    }
    
    const qOne = prompt('Did I major in Economics in college?');
    if (isYes(qOne) === false) {
        correctAnswers++;
    } 

    const qTwo = prompt('Do I own a cat named Monty?');
    if (isYes(qTwo) === true) {
        correctAnswers++;
    }

    const qThree = prompt('Do I like Thai Iced Tea?');
    if (isYes(qThree) === true) {
        correctAnswers++;
    }

    alert('You are now done with test. Click to see your results!');

    let resultsFinal = `Hello ${name}, you got ${correctAnswers} questions right!`;
    const _result = document.getElementById('result');
    _result.textContent = resultsFinal;
}

const myButton = document.getElementById('quiz-button');

myButton.addEventListener('click', startQuiz);