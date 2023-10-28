const buttonZone = document.getElementById("buttonZone");

function construir() {
  for (let i = 0; i <= 9; i++) {
    const calcBtn = document.createElement("div");
    calcBtn.textContent = i; // Establece el contenido de texto en el div
    buttonZone.appendChild(calcBtn);
  }
}

function crearOperadoresBtn() {
  const operadores = ["+", "-", "*", "/"];
  const operadoresAritmeticos = document.createElement("section");
  operadoresAritmeticos.setAttribute("id", "operadoresA");

  operadores.forEach((operador) => {
    const operadorElement = document.createElement("span");
    operadorElement.textContent = operador;
    operadoresAritmeticos.appendChild(operadorElement);
  });

  buttonZone.appendChild(operadoresAritmeticos);
}

crearOperadoresBtn();
construir(); // Llamar construir() después de crear operadores y números

const operacionMath = document.querySelectorAll("#buttonZone span, #buttonZone div");

operacionMath.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    console.log(elemento.textContent);
  });
});
