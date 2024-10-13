//correct answer
function checkAnswer() {
    const correctAnswer = "4"

    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedRadio.value;

    //To compare userAnswer to correctAnswer
    const feedbackElement = document.getElementById("feedback")

    if (userAnswer) {
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        //If no answer is selected, prompt the user
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "yellow";
    }
}

//Add an Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer)

