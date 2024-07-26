const quizQuestions = require('./quizQ');

function startQuiz() {
    let score = 0;

    console.log("Welcome to the Quiz!\n");

    quizQuestions.forEach((quizItem, index) => {
        console.log(`Question ${index + 1}: ${quizItem.question}`);
        quizItem.options.forEach((option, optionIndex) => {
            console.log(`${optionIndex + 1}. ${option}`);
        });

        const userAnswerIndex = readlineSync.keyInSelect(quizItem.options, 'Your answer (enter number) :');
        const userAnswer = quizItem.options[userAnswerIndex];

        console.log(`You answered: ${userAnswer}`);

        if (userAnswer === quizItem.correctAnswer) {
            console.log("Correct!\n");
            score++;
        } else {
            console.log(`Incorrect! The correct answer is: ${quizItem.correctAnswer}\n`);
        }
    });

    console.log(`Quiz completed! Your score is ${score} out of ${quizQuestions.length}`);
}

startQuiz();
