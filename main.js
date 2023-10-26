

const buttonZone = document.getElementById("buttonZone");
 
function construir(params) {

  const teclasCalc = document.createElement("div")
 

  for (let i = 0; i <= 9; i++) {


    const calcBtn = document.createElement("div")
    const nuevoCalcBtn = buttonZone.appendChild(calcBtn)
    
    const botonesCalc = nuevoCalcBtn.innerHTML = i

   console.log(botonesCalc)
     
    
  }

  
 
}


function crearOperadoresBtn() {
    const operadoresAritmeticos = document.createElement("div");
    operadoresAritmeticos.setAttribute("id", "operadoresA")
   
    const operadores = ["+", "-", "*", "/"];
  
    operadores.forEach((operador) => {
      const operadorElement = document.createElement("span");
      operadorElement.textContent = operador;
      operadoresAritmeticos.appendChild(operadorElement);
    });
  
    buttonZone.appendChild(operadoresAritmeticos);
  }
  
 
  

crearOperadoresBtn()

window.onload = construir
