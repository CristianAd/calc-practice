

const buttonZone = document.getElementById("buttonZone");
 
function construir(params) {

  const teclasCalc = document.createElement("div")
 

  for (let i = 0; i <= 9; i++) {


    const calcBtn = document.createElement("div")
    const nuevoCalcBtn = buttonZone.appendChild(calcBtn)
    
    const botonesCalc = nuevoCalcBtn.innerHTML = i

 
     
    
  }

  
 
}


function crearOperadoresBtn() {
    const operadoresAritmeticos = document.createElement("section");
    operadoresAritmeticos.setAttribute("id", "operadoresA")
   
    const operadores = ["+", "-", "*", "/", "C", "="];
  
    operadores.forEach((operador) => {
      const operadorElement = document.createElement("span");
      operadorElement.textContent = operador;
      operadoresAritmeticos.appendChild(operadorElement);
    });
  
    buttonZone.appendChild(operadoresAritmeticos);
  }
  
 
  

crearOperadoresBtn()

window.onload = construir


 
const operacionMath = document.querySelectorAll("#buttonZone span");

operacionMath.forEach(elemento => {
    elemento.addEventListener("click", () => {
        console.log(elemento.textContent);
    });
});


 