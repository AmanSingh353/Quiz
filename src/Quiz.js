// src/Quiz.js

import React, { useState } from 'react';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const questions = [
        {
            question: "What is the capital of India?",
            options: ["New Delhi", "Mumbai", "Bangalore", "Chennai"],
            answer: "New Delhi"
        },
        {
            question: "What is the capital of U.P?",
            options: ["Agra", "Lucknow", "Varanasi", "Kanpur"],
            answer: "Lucknow"
        },
        {
            question: "What is the largest forest in the world?",
            options: ["Amazon", "Taiga", "Congo", "Boreal"],
            answer: "Amazon"
        },
        {
            question: "What is the largest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile"
        },
        {
            question: "What is the largest state of India?",
            options: ["Uttarakhand", "Madhya Pradesh", "U.P", "Rajasthan"],
            answer: "Rajasthan"
        },
    ];

    const handleAnswer = (userAnswer) => {
        if (userAnswer === questions[questionIndex].answer) {
            setScore(score + 1);
        }
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setFinished(true);
        }
    };

    if (finished) {
        return (
            <div className="result">
                <h1>You got {score} out of {questions.length} correct!</h1>
                <button onClick={() => window.location.reload()}>Restart Quiz</button>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <h2>{questions[questionIndex].question}</h2>
            <div className="options">
                {questions[questionIndex].options.map(option => (
                    <button key={option} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
            <p>Question {questionIndex + 1} of {questions.length}</p>
        </div>
    );
};

export default Quiz;
