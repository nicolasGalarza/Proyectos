const frases = [
  "¿Quieres jugar otro juego?",
  "¿Estás listo para perder?",
  "Nadie sale de aquí.",
  "Todo es parte del juego.",
  "¿A qué estás esperando?",
  "Tu decisión te define.",
  "¿Seguirás o te rendirás?",
  "El juego recién comienza.",
  "Pierdes, desapareces... fácil.",
];

let fraseActual = 0;
const quoteText = document.getElementById("quoteText");

document.getElementById("nextQuoteBtn").addEventListener("click", () => {
  quoteText.style.opacity = 0;
  setTimeout(() => {
    fraseActual = (fraseActual + 1) % frases.length;
    quoteText.textContent = frases[fraseActual];
    quoteText.style.opacity = 1;
  }, 300);
});

/*necesario para que el triangulo de card-quotes cambie de color junto con el background

.querySelector(".quotes-card")
    .style.setProperty("--border-color", newColor); */