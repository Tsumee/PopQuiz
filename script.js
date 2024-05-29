const questionsAndAnswers = {
    "What is the capital of France?": "The capital of France is Paris.",
    "Who wrote 'Harry Potter'?": "The 'Harry Potter' series was written by J.K. Rowling.",
    "What is the boiling point of water?": "The boiling point of water is 100°C or 212°F at standard atmospheric pressure.",
    // Add more questions and answers as needed
};

document.getElementById('submit-btn').addEventListener('click', () => {
    const questionInput = document.getElementById('question-input');
    const responseContainer = document.getElementById('response');
    const userQuestion = questionInput.value.trim();

    if (userQuestion) {
        const answer = questionsAndAnswers[userQuestion] || "Sorry, I don't know the answer to that question.";
        responseContainer.innerText = answer;
        questionInput.value = '';
    } else {
        responseContainer.innerText = "Please enter a question.";
    }
});
