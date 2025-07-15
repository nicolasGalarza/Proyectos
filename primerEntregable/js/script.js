const changeColorBtn = document.getElementById("changeColorBtn");
const copyColorBtn = document.getElementById("copyColorBtn");
const colorCodeSpan = document.getElementById("colorCode");

function getRandomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorCodeSpan.textContent = newColor.toUpperCase();
  document
    .querySelector(".color-card")
    .style.setProperty("--border-color", newColor);
  document
    .querySelector(".quotes-card")
    .style.setProperty("--border-color", newColor);
}

function copyColorCode() {
  const textToCopy = colorCodeSpan.textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert(`Color copiado: ${textToCopy}`);
    })
    .catch((err) => {
      alert("Error copiando el color");
    });
}

changeColorBtn.addEventListener("click", changeBackgroundColor);
copyColorBtn.addEventListener("click", copyColorCode);

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