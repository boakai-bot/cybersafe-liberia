// ==============================
// CYBERSECURITY QUIZ
// ==============================

function checkAnswer(answer) {

    const result = document.getElementById("quiz-result");

    if (answer === "correct") {

        result.textContent =
            "✅ Correct! Always verify unexpected requests and avoid suspicious links.";

        result.style.color = "green";

    } else {

        result.textContent =
            "❌ Not quite. Think about verification before sharing sensitive information.";

        result.style.color = "red";
    }
}


// ==============================
// REPORT MESSAGE
// ==============================

function showMessage() {

    const message =
        document.getElementById("report-message");

    message.textContent =
        "Stay alert. Document suspicious activity and report it through the appropriate channel.";

    message.style.color = "#0284c7";
}