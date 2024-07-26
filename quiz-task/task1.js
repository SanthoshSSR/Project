const readlineSync = require("readline-sync")

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Rome", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Saturn", "Venus"],
        correctAnswer: "Mars"
    }
]

module.exports = quizQuestions