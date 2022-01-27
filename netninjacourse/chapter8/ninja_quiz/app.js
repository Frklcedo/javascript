const correctAnswers = ['B', 'B', 'B', 'B'];
const quizForm = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

quizForm.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer == correctAnswers[index]){
            score++;
        }
    })
    console.log(score);
    let percentageScore = score / correctAnswers.length * 100;
    window.scrollTo(0,0);
    result.classList.remove('d-none');
    let i = 0;
    const timer = setInterval(()=>{
        if(i<=Math.floor(percentageScore) && i!==percentageScore){
            result.querySelector('.ninja-value').textContent = i + '%';
            i++;
        }
        else{
            result.querySelector('.ninja-value').textContent = percentageScore + '%';
            clearInterval(timer);
        }
    },10);  
});