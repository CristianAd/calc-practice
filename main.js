const buttonZone = document.getElementById("buttonZone");
const screenZone = document.getElementById("screenZone");

function construir() {
  for (let i = 0; i <= 9; i++) {
    const calcBtn = document.createElement("div");
    calcBtn.textContent = i; 
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
construir(); 

const operacionMath = document.querySelectorAll("#buttonZone span, #buttonZone div");

operacionMath.forEach((elemento) => {
  elemento.addEventListener("click", () => {
   // console.log(elemento.textContent);
        const botonPresionado = elemento.textContent
        const defaultValorNum = parseInt(screenZone.innerHTML)
         
          switch (botonPresionado  ) {
              case "+":
                screenZone.innerHTML = 0
                console.log("es mas")
              break;
              case "-":
                screenZone.innerHTML = 0
                console.log("es menos")
              break; 
                case "*":
                  screenZone.innerHTML = 0
                  console.log("es multiplicacion")
              break; 
                case "/":
                  screenZone.innerHTML = 0
                    console.log("es division")
                  break; 
                  case "1":
                    screenZone.innerHTML = 1
                      console.log("es division")
                    break;
                    case "2":
                      screenZone.innerHTML = 2
                        console.log("es division")
                      break; 
          
            default:
              break;
          }
     
  });
});



