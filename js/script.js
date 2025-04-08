document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const quizContainer = document.getElementById("quiz");
    const updateButton = document.getElementById("update-content");

    // Navegación suave entre secciones
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Prueba de conocimiento
    if (quizContainer) {
        const quizData = [
            { question: "¿Cuál es un electrolito esencial?", options: ["Sodio", "Hierro", "Vitamina C"], answer: "Sodio" },
            { question: "¿Qué función tienen los electrolitos?", options: ["Facilitar la hidratación", "Producir energía", "Reducir el colesterol"], answer: "Facilitar la hidratación" }
        ];
        
        quizData.forEach((q, index) => {
            const questionEl = document.createElement("div");
            questionEl.innerHTML = `<p>${q.question}</p>`;
            
            q.options.forEach(option => {
                const button = document.createElement("button");
                button.textContent = option;
                button.onclick = () => {
                    alert(option === q.answer ? "Correcto!" : "Incorrecto, intenta de nuevo.");
                };
                questionEl.appendChild(button);
            });
            quizContainer.appendChild(questionEl);
        });
    }

    // Actualización de contenido (simulación)
    if (updateButton) {
        updateButton.addEventListener("click", () => {
            alert("El contenido se ha actualizado con la información más reciente.");
        });
    }

    // Toggle navigation menu for mobile view
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});
