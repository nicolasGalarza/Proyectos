// Referencias a elementos
const changeColorBtn = document.getElementById("changeColorBtn");
const copyColorBtn = document.getElementById("copyColorBtn");
const colorCodeSpan = document.getElementById("colorCode");

// Función para generar color hex random
function getRandomHexColor() {
  // Genera un número entre 0 y 0xFFFFFF y lo convierte a hexadecimal
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

// Función para cambiar el fondo y mostrar color
function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorCodeSpan.textContent = newColor.toUpperCase();
  document
    .querySelector(".color-card")
    .style.setProperty("--border-color", newColor);
}

// Copiar al portapapeles
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

// Eventos
changeColorBtn.addEventListener("click", changeBackgroundColor);
copyColorBtn.addEventListener("click", copyColorCode);