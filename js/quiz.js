document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
        { question: "¿Cuál es un electrolito esencial?", options: ["Sodio", "Hierro", "Vitamina C"], answer: "Sodio" },
        { question: "¿Qué función tienen los electrolitos?", options: ["Facilitar la hidratación", "Producir energía", "Reducir el colesterol"], answer: "Facilitar la hidratación" },
        { question: "¿Cuál es un ejemplo de bebida con electrolitos?", options: ["Agua", "Suero oral", "Refresco"], answer: "Suero oral" },
        { question: "¿Qué órgano regula los electrolitos?", options: ["Hígado", "Riñones", "Pulmones"], answer: "Riñones" },
        { question: "¿Qué electrolito es clave para la contracción muscular?", options: ["Potasio", "Calcio", "Magnesio"], answer: "Calcio" },
        { question: "¿Qué electrolito ayuda a mantener el equilibrio ácido-base?", options: ["Cloruro", "Fósforo", "Zinc"], answer: "Cloruro" },
        { question: "¿Qué electrolito es importante para la función nerviosa?", options: ["Sodio", "Hierro", "Vitamina D"], answer: "Sodio" },
        { question: "¿Qué sucede si hay un desequilibrio de electrolitos?", options: ["Deshidratación", "Aumento de energía", "Mejor digestión"], answer: "Deshidratación" },
        { question: "¿Qué electrolito es esencial para el ritmo cardíaco?", options: ["Potasio", "Cobre", "Vitamina B12"], answer: "Potasio" },
        { question: "¿Qué electrolito se pierde al sudar?", options: ["Sodio", "Calcio", "Fósforo"], answer: "Sodio" }
    ];

    const quizForm = document.getElementById("quiz-form");
    const submitButton = document.getElementById("submit-quiz");
    const resultDisplay = document.getElementById("quiz-result");

    // Render quiz questions
    quizData.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach(option => {
            const optionLabel = document.createElement("label");
            optionLabel.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            `;
            questionDiv.appendChild(optionLabel);
        });
        quizForm.appendChild(questionDiv);
    });

    // Calculate score
    submitButton.addEventListener("click", () => {
        let score = 0;
        quizData.forEach((q, index) => {
            const selectedOption = quizForm[`question${index}`].value;
            if (selectedOption === q.answer) {
                score++;
            }
        });
        resultDisplay.textContent = `Obtuviste ${score} de ${quizData.length} respuestas correctas.`;
    });
});
