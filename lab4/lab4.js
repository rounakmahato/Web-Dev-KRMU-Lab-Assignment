
const quizQuestions = [
    { question: "What is the biggest tech hub of india?", answer: "Bengaluru" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "Who wrote the Ramayana?", answer: "valmiki" },
    { question: "What is the square root of 64?", answer: "8" },
    { question: "Which language is used to style webpages?", answer: "css" }
]

function runQuiz() {

    let score = 0; 
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);
        if (userAnswer === null) {
            userAnswer = "";
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 👍");
        } else {
            alert("Wrong ❌\nCorrect Answer: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Completed!\nYour Final Score: " + score + " / " + quizQuestions.length);
}


runQuiz();
