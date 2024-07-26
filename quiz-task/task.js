const readlineSync = require("readline-sync");
const quizQuestions = require("./task1");

let name = readlineSync.question("What is your name: ");

console.log(`Hai ${name}, Let's start the Quiz.\n`);

function startQuiz(){
    let score = 0;

    quizQuestions.forEach((quizcontent, quizindex) => {
        console.log(`Question ${quizindex + 1}: ${quizcontent.question}`);
        quizcontent.options.forEach((indexcontent, index) =>{
            console.log(`${index + 1}: ${indexcontent}`);
        });

        const userAnswer = readlineSync.keyInSelect(quizcontent.options,"Please choose the option: ")
        const Answer = quizcontent.options[userAnswer]

        console.log(`You answered ${Answer}`);

        if(Answer == quizcontent.correctAnswer){
            console.log("Your answer is correct\n");
            score++;
        }
        else{
            console.log(`Your answer is incorrect, the correct answer is ${quizcontent.correctAnswer}\n`);
        }
    });

    console.log(`Thanks for participating. Your score is ${score} out of ${quizQuestions.length}`);

}
startQuiz();